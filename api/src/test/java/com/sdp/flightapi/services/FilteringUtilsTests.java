package com.sdp.flightapi.services;

import com.sdp.flightapi.models.Place;
import com.sdp.flightapi.models.ReservedFlights;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class FilteringUtilsTests {

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

        reservedFlightsHolder = FilteringUtils.filterByPrice(reservedFlightsHolder, true);

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

        reservedFlightsHolder = FilteringUtils.filterByPrice(reservedFlightsHolder, false);

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

        reservedFlightsHolder = FilteringUtils.filterByDate(reservedFlightsHolder, true);

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

        reservedFlightsHolder = FilteringUtils.filterByDate(reservedFlightsHolder, false);

        assertEquals(List.of(flight3,flight2,flight1,flight0), reservedFlightsHolder);
    }
    @Test
    void testFilterByCityOriginAscending() {
        ReservedFlights flight0 = new ReservedFlights();
        Place Origin0 = new Place();
        Origin0.setCityName("A");
        flight0.setOrigin(Origin0);


        ReservedFlights flight1 = new ReservedFlights();
        Place Origin1 = new Place();
        Origin1.setCityName("B");
        flight1.setOrigin(Origin1);


        ReservedFlights flight2 = new ReservedFlights();
        Place Origin2 = new Place();
        Origin2.setCityName("C");
        flight2.setOrigin(Origin2);


        ReservedFlights flight3 = new ReservedFlights();
        Place Origin3 = new Place();
        Origin3.setCityName("D");
        flight3.setOrigin(Origin3);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = FilteringUtils.filterByCityOrigin(reservedFlightsHolder, true);

        assertEquals(List.of(flight0,flight1,flight2,flight3), reservedFlightsHolder);
    }
    @Test
    void testFilterByCityOriginDescending() {
        ReservedFlights flight0 = new ReservedFlights();
        Place Origin0 = new Place();
        Origin0.setCityName("A");
        flight0.setOrigin(Origin0);


        ReservedFlights flight1 = new ReservedFlights();
        Place Origin1 = new Place();
        Origin1.setCityName("B");
        flight1.setOrigin(Origin1);


        ReservedFlights flight2 = new ReservedFlights();
        Place Origin2 = new Place();
        Origin2.setCityName("C");
        flight2.setOrigin(Origin2);


        ReservedFlights flight3 = new ReservedFlights();
        Place Origin3 = new Place();
        Origin3.setCityName("D");
        flight3.setOrigin(Origin3);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = FilteringUtils.filterByCityOrigin(reservedFlightsHolder, false);

        assertEquals(List.of(flight3,flight2,flight1,flight0), reservedFlightsHolder);
    }

    @Test
    void testFilterByCityDestinationDescending() {
        ReservedFlights flight0 = new ReservedFlights();
        Place Destination0 = new Place();
        Destination0.setCityName("A");
        flight0.setDestination(Destination0);


        ReservedFlights flight1 = new ReservedFlights();
        Place Destination1 = new Place();
        Destination1.setCityName("B");
        flight1.setDestination(Destination1);


        ReservedFlights flight2 = new ReservedFlights();
        Place Destination2 = new Place();
        Destination2.setCityName("C");
        flight2.setDestination(Destination2);


        ReservedFlights flight3 = new ReservedFlights();
        Place Destination3 = new Place();
        Destination3.setCityName("D");
        flight3.setDestination(Destination3);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = FilteringUtils.filterByCityDestination(reservedFlightsHolder, false);

        assertEquals(List.of(flight3,flight2,flight1,flight0), reservedFlightsHolder);
    }

    @Test
    void testFilterByCityDestinationAscending() {
        ReservedFlights flight0 = new ReservedFlights();
        Place Destination0 = new Place();
        Destination0.setCityName("A");
        flight0.setDestination(Destination0);


        ReservedFlights flight1 = new ReservedFlights();
        Place Destination1 = new Place();
        Destination1.setCityName("B");
        flight1.setDestination(Destination1);


        ReservedFlights flight2 = new ReservedFlights();
        Place Destination2 = new Place();
        Destination2.setCityName("C");
        flight2.setDestination(Destination2);


        ReservedFlights flight3 = new ReservedFlights();
        Place Destination3 = new Place();
        Destination3.setCityName("D");
        flight3.setDestination(Destination3);

        List<ReservedFlights> reservedFlightsHolder = List.of(flight0, flight1, flight2, flight3);

        reservedFlightsHolder = FilteringUtils.filterByCityDestination(reservedFlightsHolder, true);

        assertEquals(List.of(flight0,flight1,flight2,flight3), reservedFlightsHolder);
    }

}