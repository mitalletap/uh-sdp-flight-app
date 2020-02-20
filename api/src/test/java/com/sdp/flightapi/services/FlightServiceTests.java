package com.sdp.flightapi.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class FlightServiceTests {

    @Autowired private FlightService flightService;

    String tomorrowDateString;

    @BeforeEach
    void setUp() {
        tomorrowDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now().plus(1, ChronoUnit.DAYS)));
    }

    @Test
    void testGenerateParameterStringWithNullInboundDate() {
        assertEquals("SFO-sky/JFK-sky/2020-01-01",
                flightService.parameterString("SFO", "JFK",
                        "2020-01-01",
                        Optional.ofNullable(null)));
    }

    @Test
    void testGenerateParameterStringWithPresentInboundDate() {
        assertEquals("SFO-sky/JFK-sky/2020-01-01/2020-01-02",
                flightService.parameterString("SFO", "JFK",
                        "2020-01-01", Optional.of("2020-01-02")));
    }

    @Test
    void testGetFlightsReturnsFlightDataInExpectedRawFormat() {
        RawFlightData[] rawFlightData = new RawFlightData[1];

        assertDoesNotThrow(() ->  {
            rawFlightData[0] = flightService
                    .getFlights("SFO", "JFK", tomorrowDateString, Optional.ofNullable(null))
                    .block();
        });

        assertAll(
                () -> assertEquals("JFK", rawFlightData[0].getPlaces()
                        .get(0)
                        .getIataCode()),
                () -> assertEquals("SFO", rawFlightData[0].getPlaces()
                        .get(1)
                        .getIataCode())
        );
    }

    @Test
    void testConvertRawFlightDataToReservedFlightsFormat() {

        List<Carrier> carriers = Arrays.asList(new Carrier(), new Carrier(), new Carrier());
        carriers.get(0).setCarrierId(100);
        carriers.get(0).setName("A Airlines");
        carriers.get(1).setCarrierId(200);
        carriers.get(1).setName("B Airlines");
        carriers.get(2).setCarrierId(300);
        carriers.get(2).setName("C Airlines");
        carriers.get(3).setCarrierId(400);
        carriers.get(3).setName("D Airlines");

        List<Place> places = Arrays.asList(new Place(), new Place());
        places.get(0).setPlaceId(10000);
        places.get(0).setCityName("Destination City");
        places.get(1).setPlaceId(20000);
        places.get(1).setCityName("Origin City");

        List<Quote> quotes = Arrays.asList(new Quote(), new Quote());
        quotes.get(0).setDirect(false);
        quotes.get(0).setMinPrice(500d);
        quotes.get(0).setOutboundLeg(new OutboundLeg());
        quotes.get(0).getOutboundLeg().setCarrierIds(Arrays.asList(200));
        quotes.get(0).getOutboundLeg().setOriginId(20000);
        quotes.get(0).getOutboundLeg().setDestinationId(10000);
        quotes.get(0).getOutboundLeg().setDepartureDate(tomorrowDateString);
        quotes.get(1).setDirect(true);
        quotes.get(1).setMinPrice(600d);
        quotes.get(1).setOutboundLeg(new OutboundLeg());
        quotes.get(1).getOutboundLeg().setCarrierIds(Arrays.asList(300));
        quotes.get(1).getOutboundLeg().setOriginId(20000);
        quotes.get(1).getOutboundLeg().setDestinationId(10000);
        quotes.get(1).getOutboundLeg().setDepartureDate(tomorrowDateString);

        RawFlightData rawFlightData = new RawFlightData();
        rawFlightData.setCarriers(carriers);
        rawFlightData.setPlaces(places);
        rawFlightData.setQuotes(quotes);

        List<ReservedFlights> convertedFlightsList = flightService.formatFlightList(rawFlightData);

        assertEquals(2, convertedFlightsList.size());
        assertAll(
                () -> assertEquals(Arrays.asList(true, false),
                        convertedFlightsList.stream()
                            .map(ReservedFlights::isDirect)),

                () -> assertTrue(convertedFlightsList.stream()
                        .allMatch(flight -> flight
                                .getOrigin()
                                .getCityName().equals("Origin City"))),

                () -> assertTrue(convertedFlightsList.stream()
                        .allMatch(flight -> flight
                                .getDestination()
                                .getCityName().equals("Destination City"))),

                () -> assertEquals(Arrays.asList("C Airlines", "B Airlines"),
                        convertedFlightsList.stream()
                            .map(flight -> flight
                                .getOutboundCarrier()
                                .getName())),

                () -> assertEquals(Arrays.asList(600f, 500f),
                        convertedFlightsList.stream()
                            .map(ReservedFlights::getPrice))
        );
    }
}
