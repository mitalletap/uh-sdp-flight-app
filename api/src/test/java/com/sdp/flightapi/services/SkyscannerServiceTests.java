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

    String nextMonthDateString;

    @BeforeEach
    void setUp() {
        nextMonthDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now().plus(30, ChronoUnit.DAYS)));
    }

    @Test
    void testGetFlightsReturnsFlightDataInExpectedRawFormat() {
        RawFlightData[] rawFlightData = new RawFlightData[1];

        assertDoesNotThrow(() ->  {
            rawFlightData[0] = skyscannerService
                    .getFlights("IAH-sky/SFO-sky/" + nextMonthDateString);
        });

        assertTrue(rawFlightData[0].getQuotes()
                .size() > 0);

        assertEquals(rawFlightData[0].getPlaces()
                    .stream()
                    .filter(place -> place.getIataCode()
                            .equals("IAH"))
                    .findAny()
                    .get()
                    .getPlaceId(),
                rawFlightData[0].getQuotes()
                    .get(0)
                    .getOutboundLeg()
                    .getOriginId());

        assertEquals(rawFlightData[0].getPlaces()
                    .stream()
                    .filter(place -> place.getIataCode()
                            .equals("SFO"))
                    .findAny()
                    .get()
                    .getPlaceId(),
                rawFlightData[0].getQuotes()
                    .get(0)
                    .getOutboundLeg()
                    .getDestinationId());
    }
}
