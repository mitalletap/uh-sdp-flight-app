package com.sdp.flightapi.services;


import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.text.SimpleDateFormat;
import java.time.Instant;
import java.time.temporal.ChronoUnit;
import java.util.Collections;
import java.util.Date;
import java.util.List;
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
    void testGetFlightsCallsSkyscannerServiceAndDataConverter() {
        RawFlightData rawFlightData = RawFlightData.builder()
            .quotes(Collections.singletonList(Quote.builder()
                .direct(true)
                .minPrice(100d)
                .outboundLeg(TripLeg.builder()
                    .carrierIds(Collections.singletonList(0))
                    .build())
                .build()))
            .carriers(Collections.singletonList(Carrier.builder()
                .carrierId(0)
                .build()))
            .places(Collections.singletonList(Place.builder()
                .placeId(0)
                .build()))
            .build();

        SkyscannerService skyscannerServiceMock = mock(SkyscannerService.class);
        when(skyscannerServiceMock.getFlights(anyString())).thenReturn(rawFlightData);

        FlightService mockedFlightService = flightService;
        mockedFlightService.skyscannerService = skyscannerServiceMock;

        List<ReservedFlights> flights = mockedFlightService.getFlights("", "",
                "", Optional.empty());

        verify(skyscannerServiceMock).getFlights(anyString());
        assertEquals(Collections.singletonList(ReservedFlights.builder()
                    .direct(true)
                    .price(100f)
                    .outboundCarrier(Carrier.builder()
                        .carrierId(0)
                        .build())
                    .build()),
                flights);
    }

}
