package com.sdp.flightapi.controllers;

import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;

import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.assertDoesNotThrow;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

public class FlightControllerTests {

    @Test
    void testGetFlightsCallsFlightServiceGetFlights() {
        FlightService flightServiceMock = mock(FlightService.class);
        FlightController flightController = new FlightController(flightServiceMock);

        flightController.getFlights("", "",
                "", Optional.empty());

        verify(flightServiceMock).getFlights(anyString(), anyString(),
                anyString(), ArgumentMatchers.any(Optional.class));
    }

    @Test
    void testGetFlightsReturnsResultInConvertedFormat() {
        FlightService flightServiceMock = mock(FlightService.class);
        FlightController flightController = new FlightController(flightServiceMock);

        assertDoesNotThrow(() ->  {
            List<ReservedFlights> getFlightsResult = (List<ReservedFlights>)
                    flightController.getFlights("", "",
                        "", Optional.empty());
        });
    }
}
