package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class FlightServiceTests {

    @Autowired private FlightService flightService;

    String nowDateString;

    @BeforeEach
    void setUp() {
        nowDateString = new SimpleDateFormat("yyyy-MM-dd").format(
                Date.from(Instant.now()));
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
                    .getFlights("SFO", "JFK", nowDateString, Optional.ofNullable(null))
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
