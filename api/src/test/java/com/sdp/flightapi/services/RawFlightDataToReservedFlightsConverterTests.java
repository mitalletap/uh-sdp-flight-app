package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Arrays;
import java.util.Collections;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class RawFlightDataToReservedFlightsConverterTests {

    String tomorrowDateString;
    RawFlightData rawFlightData;

    @BeforeEach
    void setUp() {
        tomorrowDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now().plus(1, ChronoUnit.DAYS)));

        List<Carrier> carriers = Arrays.asList(new Carrier(), new Carrier(),
                new Carrier(), new Carrier());
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
        quotes.get(0).getOutboundLeg().setCarrierIds(Collections.singletonList(200));
        quotes.get(0).getOutboundLeg().setOriginId(20000);
        quotes.get(0).getOutboundLeg().setDestinationId(10000);
        quotes.get(0).getOutboundLeg().setDepartureDate(tomorrowDateString);
        quotes.get(1).setDirect(true);
        quotes.get(1).setMinPrice(600d);
        quotes.get(1).setOutboundLeg(new OutboundLeg());
        quotes.get(1).getOutboundLeg().setCarrierIds(Collections.singletonList(300));
        quotes.get(1).getOutboundLeg().setOriginId(20000);
        quotes.get(1).getOutboundLeg().setDestinationId(10000);
        quotes.get(1).getOutboundLeg().setDepartureDate(tomorrowDateString);

        rawFlightData = new RawFlightData();
        rawFlightData.setCarriers(carriers);
        rawFlightData.setPlaces(places);
        rawFlightData.setQuotes(quotes);
    }

    @Test
    void testInitializeWithQuoteAndCarrierData() {
        List<ReservedFlights> reservedFlights
                = RawFlightDataToReservedFlightsConverter
                    .initializeWithQuoteAndCarrierData(rawFlightData);

        assertAll(
                () -> assertEquals(Arrays.asList(false, true),
                        reservedFlights.stream()
                                .map(ReservedFlights::isDirect)
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("B Airlines", "C Airlines"),
                        reservedFlights.stream()
                                .map(flight -> flight
                                        .getOutboundCarrier()
                                        .getName())
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList(500f, 600f),
                        reservedFlights.stream()
                                .map(ReservedFlights::getPrice)
                                .collect(Collectors.toList()))
        );
    }

    @Test
    void testLoadPlaceData() {
        List<ReservedFlights> reservedFlights
                = List.of(new ReservedFlights(), new ReservedFlights());

        RawFlightDataToReservedFlightsConverter.loadPlaceData(reservedFlights, rawFlightData);

        assertAll(
                () -> assertTrue(reservedFlights.stream()
                        .allMatch(flight -> flight
                                .getOrigin()
                                .getCityName().equals("Origin City"))),

                () -> assertTrue(reservedFlights.stream()
                        .allMatch(flight -> flight
                                .getDestination()
                                .getCityName().equals("Destination City")))
        );
    }

    @Test
    void testLoadDateData() {
        List<ReservedFlights> reservedFlights
                = List.of(new ReservedFlights(), new ReservedFlights());

        RawFlightDataToReservedFlightsConverter.loadDateData(reservedFlights, rawFlightData);

        assertTrue(reservedFlights.stream()
                .allMatch(flight -> flight.getDepartureDate()
                        .equals(tomorrowDateString)));
    }

    @Test
    void testConvertRawFlightDataWithNoQuotesGeneratesEmptyListOfReservedFlights() {
        List<Carrier> carriers = Collections.emptyList();

        List<Place> places = Arrays.asList(new Place(), new Place());
        places.get(0).setPlaceId(10000);
        places.get(0).setCityName("Destination City");
        places.get(1).setPlaceId(20000);
        places.get(1).setCityName("Origin City");

        List<Quote> quotes = Collections.emptyList();

        RawFlightData noQuotesRawFlightData = new RawFlightData();
        noQuotesRawFlightData.setCarriers(carriers);
        noQuotesRawFlightData.setPlaces(places);
        noQuotesRawFlightData.setQuotes(quotes);

        List<ReservedFlights> convertedFlightsList
                = RawFlightDataToReservedFlightsConverter
                    .convert(noQuotesRawFlightData);

        assertEquals(0, convertedFlightsList.size());
    }
}
