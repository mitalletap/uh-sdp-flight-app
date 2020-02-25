package com.sdp.flightapi.services;


import com.sdp.flightapi.models.RawFlightData;
import org.junit.jupiter.api.BeforeEach;

import com.sdp.flightapi.dao.FlightDao;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.Date;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.*;

@SpringBootTest
public class FlightServiceTests {

    @Autowired FlightService flightService;

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

    @Test
    void testGetFlightsCallsSkyscannerService() {
        RawFlightData rawFlightData = new RawFlightData();
        rawFlightData.setQuotes(Collections.emptyList());

        SkyscannerService skyscannerServiceMock = mock(SkyscannerService.class);
        when(skyscannerServiceMock.getFlights(anyString())).thenReturn(rawFlightData);

        FlightService flightServiceWithMockSkyscanner = flightService;
        flightServiceWithMockSkyscanner.skyscannerService = skyscannerServiceMock;

        flightServiceWithMockSkyscanner.getFlights("", "",
                "", Optional.empty());

        verify(skyscannerServiceMock).getFlights(anyString());
    }

}
