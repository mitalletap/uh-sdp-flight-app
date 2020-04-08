package com.sdp.flightapi.services;

import com.sdp.flightapi.models.ReservedFlights;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static com.sdp.flightapi.services.FilteringFlightsMockData.*;
import static com.sdp.flightapi.services.FilteringUtils.*;
import static org.junit.jupiter.api.Assertions.assertEquals;

class FilteringUtilsTests {
    List<ReservedFlights> originalFlightList;
    
    @BeforeEach
    void setUp() {
        originalFlightList = List.of(
                cheap_earliestOutbound_middleInbound_fromD_toC,
                cheapest_middleOutbound_lateInbound_fromB_toE,
                highestPrice_lateOutbound_earlyInbound_fromE_toB,
                middlePrice_latestOutbound_earliestInbound_fromA_toD,
                highPrice_earlyOutbound_latestInbound_fromC_toA
        );
    }

    @Test
    void testFilterByPriceAscending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(PRICE, true, 
                originalFlightList);

        assertEquals(
                List.of(
                     cheapest_middleOutbound_lateInbound_fromB_toE,
                     cheap_earliestOutbound_middleInbound_fromD_toC,
                     middlePrice_latestOutbound_earliestInbound_fromA_toD,
                     highPrice_earlyOutbound_latestInbound_fromC_toA,
                     highestPrice_lateOutbound_earlyInbound_fromE_toB
                ),
                filteredFlights);
    }

    @Test
    void testFilterByPriceDescending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(PRICE, false, 
                originalFlightList);

        assertEquals(
                List.of(
                    highestPrice_lateOutbound_earlyInbound_fromE_toB,
                    highPrice_earlyOutbound_latestInbound_fromC_toA,
                    middlePrice_latestOutbound_earliestInbound_fromA_toD,
                    cheap_earliestOutbound_middleInbound_fromD_toC,
                    cheapest_middleOutbound_lateInbound_fromB_toE
                ),
                filteredFlights);
    }

    @Test
    void testFilterByOutboundDepartureAscending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(OUTBOUND_DEPARTURE, true,
                originalFlightList);

        assertEquals(
                List.of(
                    cheap_earliestOutbound_middleInbound_fromD_toC,
                    highPrice_earlyOutbound_latestInbound_fromC_toA,
                    cheapest_middleOutbound_lateInbound_fromB_toE,
                    highestPrice_lateOutbound_earlyInbound_fromE_toB,
                    middlePrice_latestOutbound_earliestInbound_fromA_toD
                ),
                filteredFlights);
    }

    @Test
    void testFilterByOutboundDepartureDescending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(OUTBOUND_DEPARTURE, false,
                originalFlightList);

        assertEquals(
                List.of(
                    middlePrice_latestOutbound_earliestInbound_fromA_toD,
                    highestPrice_lateOutbound_earlyInbound_fromE_toB,
                    cheapest_middleOutbound_lateInbound_fromB_toE,
                    highPrice_earlyOutbound_latestInbound_fromC_toA,
                    cheap_earliestOutbound_middleInbound_fromD_toC
                ),
                filteredFlights);
    }

    @Test
    void testFilterByInboundDepartureAscending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(INBOUND_DEPARTURE, true,
                originalFlightList);

        assertEquals(
                List.of(
                    middlePrice_latestOutbound_earliestInbound_fromA_toD,
                    highestPrice_lateOutbound_earlyInbound_fromE_toB,
                    cheap_earliestOutbound_middleInbound_fromD_toC,
                    cheapest_middleOutbound_lateInbound_fromB_toE,
                    highPrice_earlyOutbound_latestInbound_fromC_toA
                ),
                filteredFlights);
    }

    @Test
    void testFilterByInboundDepartureDescending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(INBOUND_DEPARTURE, false,
                originalFlightList);

        assertEquals(
                List.of(
                    highPrice_earlyOutbound_latestInbound_fromC_toA,
                    cheapest_middleOutbound_lateInbound_fromB_toE,
                    cheap_earliestOutbound_middleInbound_fromD_toC,
                    highestPrice_lateOutbound_earlyInbound_fromE_toB,
                    middlePrice_latestOutbound_earliestInbound_fromA_toD
                ),
                filteredFlights);
    }

    @Test
    void testFilterByCityOriginAscending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(ORIGIN_CITY, true,
                originalFlightList);

        assertEquals(
                List.of(
                        middlePrice_latestOutbound_earliestInbound_fromA_toD,
                        cheapest_middleOutbound_lateInbound_fromB_toE,
                        highPrice_earlyOutbound_latestInbound_fromC_toA,
                        cheap_earliestOutbound_middleInbound_fromD_toC,
                        highestPrice_lateOutbound_earlyInbound_fromE_toB
                ),
                filteredFlights);
    }

    @Test
    void testFilterByCityOriginDescending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(ORIGIN_CITY, false,
                originalFlightList);

        assertEquals(
                List.of(
                        highestPrice_lateOutbound_earlyInbound_fromE_toB,
                        cheap_earliestOutbound_middleInbound_fromD_toC,
                        highPrice_earlyOutbound_latestInbound_fromC_toA,
                        cheapest_middleOutbound_lateInbound_fromB_toE,
                        middlePrice_latestOutbound_earliestInbound_fromA_toD
                ),
                filteredFlights);
    }

    @Test
    void testFilterByCityDestinationAscending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(DESTINATION_CITY, true,
                originalFlightList);

        assertEquals(
                List.of(
                        highPrice_earlyOutbound_latestInbound_fromC_toA,
                        highestPrice_lateOutbound_earlyInbound_fromE_toB,
                        cheap_earliestOutbound_middleInbound_fromD_toC,
                        middlePrice_latestOutbound_earliestInbound_fromA_toD,
                        cheapest_middleOutbound_lateInbound_fromB_toE
                ),
                filteredFlights);
    }

    @Test
    void testFilterByCityDestinationDescending() {
        List<ReservedFlights> filteredFlights = FilteringUtils.sortBy(DESTINATION_CITY, false,
                originalFlightList);

        assertEquals(
                List.of(
                        cheapest_middleOutbound_lateInbound_fromB_toE,
                        middlePrice_latestOutbound_earliestInbound_fromA_toD,
                        cheap_earliestOutbound_middleInbound_fromD_toC,
                        highestPrice_lateOutbound_earlyInbound_fromE_toB,
                        highPrice_earlyOutbound_latestInbound_fromC_toA
                ),
                filteredFlights);
    }
}