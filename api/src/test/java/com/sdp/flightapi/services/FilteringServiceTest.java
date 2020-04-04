package com.sdp.flightapi.services;

import com.sdp.flightapi.models.ReservedFlights;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.Assert.assertEquals;

class FilteringServiceTest {
    static FilteringService filteringService;
    @BeforeAll
    static void setUpBeforeAll() {
        filteringService = new FilteringService();
    }
    @Test
    void testFilterByPriceAscending() {
        ReservedFlights flight0 = new ReservedFlights();
        flight0.setPrice(500f);
        ReservedFlights flight1 = new ReservedFlights();
        flight1.setPrice(300f);
        ReservedFlights flight2 = new ReservedFlights();
        flight2.setPrice(400f);
        ReservedFlights flight3 = new ReservedFlights();
        flight3.setPrice(200f);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = filteringService.filterByPrice(reservedFlightsHolder, true);

        assertEquals(List.of(flight3, flight1, flight2, flight0), reservedFlightsHolder);
    }
    @Test
    void testFilterByPriceDescending() {
        ReservedFlights flight0 = new ReservedFlights();
        flight0.setPrice(500f);
        ReservedFlights flight1 = new ReservedFlights();
        flight1.setPrice(300f);
        ReservedFlights flight2 = new ReservedFlights();
        flight2.setPrice(400f);
        ReservedFlights flight3 = new ReservedFlights();
        flight3.setPrice(200f);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = filteringService.filterByPrice(reservedFlightsHolder, false);

        assertEquals(List.of(flight0,flight2,flight1,flight3), reservedFlightsHolder);
    }

    @Test
    void testFilterByDateAscending() {
        ReservedFlights flight0 = new ReservedFlights();
        flight0.setOutboundDepartureDate("2020-05-16");
        ReservedFlights flight1 = new ReservedFlights();
        flight1.setOutboundDepartureDate("2020-06-16");
        ReservedFlights flight2 = new ReservedFlights();
        flight2.setOutboundDepartureDate("2020-07-16");
        ReservedFlights flight3 = new ReservedFlights();
        flight3.setOutboundDepartureDate("2020-08-16");

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = filteringService.filterByDate(reservedFlightsHolder, true);

        assertEquals(List.of(flight0,flight1,flight2,flight3), reservedFlightsHolder);
    }

    @Test
    void testFilterByDateDescending() {
        ReservedFlights flight0 = new ReservedFlights();
        flight0.setOutboundDepartureDate("2020-05-16");
        ReservedFlights flight1 = new ReservedFlights();
        flight1.setOutboundDepartureDate("2020-06-16");
        ReservedFlights flight2 = new ReservedFlights();
        flight2.setOutboundDepartureDate("2020-07-16");
        ReservedFlights flight3 = new ReservedFlights();
        flight3.setOutboundDepartureDate("2020-08-16");

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = filteringService.filterByDate(reservedFlightsHolder, false);

        assertEquals(List.of(flight3,flight2,flight1,flight0), reservedFlightsHolder);
    }

}