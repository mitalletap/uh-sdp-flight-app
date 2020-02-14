package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class FlightServiceTests {

    @Autowired private FlightService flightService;

    @Test
    void testGenerateOriginDestinationString() {
        assertEquals("SFO-sky/JFK-sky/",
                flightService.originDestinationString("SFO", "JFK"));
    }

    @Test
    void testGetFlightsReturnsFlightDataInExpectedRawFormat() {
        String nowDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now()));
        RawFlightData[] rawFlightData = new RawFlightData[1];

        assertDoesNotThrow(() ->  {
            rawFlightData[0] = flightService
                    .getFlights("SFO", "JFK", nowDateString)
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
}
