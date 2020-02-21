package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
public class SkyscannerAPITests {
    @Autowired
    private FlightService flightService;

    String tomorrowDateString;

    @BeforeEach
    void setUp() {
        tomorrowDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now().plus(1, ChronoUnit.DAYS)));
    }

    @Test
    void testGetFlightsReturnsFlightDataInExpectedRawFormat() {
        RawFlightData[] rawFlightData = new RawFlightData[1];

        assertDoesNotThrow(() ->  {
            rawFlightData[0] = flightService
                    .getFlights("SFO", "JFK", tomorrowDateString, Optional.empty())
                    .block();
        });

        assertTrue(rawFlightData[0].getQuotes()
                .size() > 0);

        assertAll(
                () -> assertEquals(rawFlightData[0].getPlaces()
                                .stream()
                                .filter(place -> place.getIataCode()
                                        .equals("SFO"))
                                .findAny()
                                .get()
                                .getPlaceId(),
                        rawFlightData[0].getQuotes()
                                .get(0)
                                .getOutboundLeg()
                                .getOriginId()),

                () -> assertEquals(rawFlightData[0].getPlaces()
                                .stream()
                                .filter(place -> place.getIataCode()
                                        .equals("JFK"))
                                .findAny()
                                .get()
                                .getPlaceId(),
                        rawFlightData[0].getQuotes()
                                .get(0)
                                .getOutboundLeg()
                                .getDestinationId()
                ));
    }
}
