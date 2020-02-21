package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.*;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.mock;

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
                        Optional.empty()));
    }

    @Test
    void testGenerateParameterStringWithPresentInboundDate() {
        assertEquals("SFO-sky/JFK-sky/2020-01-01/2020-01-02",
                flightService.parameterString("SFO", "JFK",
                        "2020-01-01", Optional.of("2020-01-02")));
    }

}
