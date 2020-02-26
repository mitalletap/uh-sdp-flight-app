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

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class SkyscannerServiceTests {
    @Autowired
    SkyscannerService skyscannerService;

    String nextWeekDateString;

    @BeforeEach
    void setUp() {
        nextWeekDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now().plus(7, ChronoUnit.DAYS)));
    }

    @Test
    void testGetFlightsReturnsFlightDataInExpectedRawFormat() {
        RawFlightData[] rawFlightData = new RawFlightData[1];

        assertDoesNotThrow(() ->  {
            rawFlightData[0] = skyscannerService
                    .getFlights("SFO-sky/JFK-sky/" + nextWeekDateString);
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
