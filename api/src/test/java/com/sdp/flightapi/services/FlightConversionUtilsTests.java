package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.Collections;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

<<<<<<< Updated upstream
public class FlightConversionUtilsTests {
=======
class FlightConversionUtilsTests {
>>>>>>> Stashed changes

    RawFlightData oneWayRawFlightData;
    RawFlightData roundTripRawFlightData;

    @BeforeEach
    void setUp() {
        oneWayRawFlightData = RawFlightDataMockData.generateOneWay();
        roundTripRawFlightData = RawFlightDataMockData.generateRoundTrip();
    }

    @Test
    void testBuildFlightFromQuoteAndCarriersOneWay() {
        ReservedFlights flight = FlightConversionUtils.buildFlightFromQuoteAndCarriers(
                oneWayRawFlightData.getQuotes().get(0),
                oneWayRawFlightData.getCarriers());

        assertEquals(
                ReservedFlights.builder()
                        .direct(true)
                        .price(200f)
                        .outboundCarrier(Carrier.builder()
                                .carrierId(100)
                                .name("Alpha Airlines")
                                .build())
                        .build(),
                flight);
    }

    @Test
    void testAddDepartureDatesOneWay() {
        ReservedFlights flight =
                FlightConversionUtils.addDepartureDates(oneWayRawFlightData.getQuotes().get(0), new ReservedFlights()
                );

        assertEquals(
                ReservedFlights.builder()
                        .outboundDepartureDate("2020-05-09T00:00:00")
                        .build(),
                flight);
    }

    @Test
    void testAddDepartureDatesRoundTrip() {
        ReservedFlights flight =
                FlightConversionUtils.addDepartureDates(roundTripRawFlightData.getQuotes().get(0), new ReservedFlights()
                );

        assertEquals(
                ReservedFlights.builder()
                        .outboundDepartureDate("2020-05-09T00:00:00")
                        .inboundDepartureDate("2020-05-11T00:00:00")
                        .build(),
                flight);
    }

    @Test
    void testBuildFlightListFromQuotesAndCarriersOneWay() {
        List<ReservedFlights> builtFlights
                = FlightConversionUtils
                .buildFlightListFromQuotesAndCarriers(oneWayRawFlightData);

        assertEquals(
                List.of(ReservedFlights.builder()
                                .direct(true)
                                .price(200f)
                                .outboundDepartureDate("2020-05-09T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(100)
                                        .name("Alpha Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(false)
                                .price(300f)
                                .outboundDepartureDate("2020-05-10T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(200)
                                        .name("Beta Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(true)
                                .price(250f)
                                .outboundDepartureDate("2020-05-11T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(300)
                                        .name("Gamma Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(false)
                                .price(300f)
                                .outboundDepartureDate("2020-05-12T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(500)
                                        .name("Epsilon Airlines")
                                        .build())
                                .build()),

                builtFlights);
    }

    @Test
    void testBuildFlightFromQuoteAndCarriersRoundTrip() {
        ReservedFlights flight =
                FlightConversionUtils.buildFlightFromQuoteAndCarriers(
                        roundTripRawFlightData.getQuotes().get(0), roundTripRawFlightData.getCarriers());

        assertEquals(
                ReservedFlights.builder()
                        .direct(true)
                        .price(300f)
                        .outboundCarrier(Carrier.builder()
                                .carrierId(100)
                                .name("Alpha Airlines")
                                .build())
                        .inboundCarrier(Carrier.builder()
                                .carrierId(100)
                                .name("Alpha Airlines")
                                .build())
                        .build(),
                flight);
    }

    @Test
    void testBuildFlightListFromQuotesAndCarriersRoundTrip() {
        List<ReservedFlights> builtFlights
                = FlightConversionUtils
                .buildFlightListFromQuotesAndCarriers(roundTripRawFlightData);

        assertEquals(
                List.of(ReservedFlights.builder()
                                .direct(true)
                                .price(300f)
                                .outboundDepartureDate("2020-05-09T00:00:00")
                                .inboundDepartureDate("2020-05-11T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(100)
                                        .name("Alpha Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(100)
                                        .name("Alpha Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(false)
                                .price(500f)
                                .outboundDepartureDate("2020-05-10T00:00:00")
                                .inboundDepartureDate("2020-05-12T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(200)
                                        .name("Beta Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(200)
                                        .name("Beta Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(true)
                                .price(350f)
                                .outboundDepartureDate("2020-05-11T00:00:00")
                                .inboundDepartureDate("2020-05-13T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(300)
                                        .name("Gamma Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(300)
                                        .name("Gamma Airlines")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(false)
                                .price(450f)
                                .outboundDepartureDate("2020-05-12T00:00:00")
                                .inboundDepartureDate("2020-05-14T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(500)
                                        .name("Epsilon Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(500)
                                        .name("Epsilon Airlines")
                                        .build())
                                .build()),

                builtFlights);
    }

    @Test
    void testLoadPlaceData() {
        List<ReservedFlights> reservedFlights =
                FlightConversionUtils.loadPlaceData(
                        List.of(new ReservedFlights(), new ReservedFlights()),
                        roundTripRawFlightData);

        assertTrue(reservedFlights.stream()
                .allMatch(flight -> flight
                        .getOrigin()
                        .getCityName().equals("A City")));
        assertTrue(reservedFlights.stream()
                .allMatch(flight -> flight
                        .getDestination()
                        .getCityName().equals("B City")));
    }

    @Test
    void testConvertRawFlightDataWithNoQuotesGeneratesEmptyListOfReservedFlights() {
        roundTripRawFlightData.setQuotes(Collections.emptyList());

        List<ReservedFlights> convertedFlightsList
                = FlightConversionUtils.convert(roundTripRawFlightData);

        assertEquals(0, convertedFlightsList.size());
    }

    @Test
    void testConvertPopulatedRawFlightDataToListOfReservedFlights() {
        roundTripRawFlightData.setQuotes(roundTripRawFlightData.getQuotes().subList(0, 2));

        List<ReservedFlights> convertedFlights
                = FlightConversionUtils.convert(roundTripRawFlightData);

        assertEquals(2, convertedFlights.size());

        assertEquals(
                List.of(ReservedFlights.builder()
                                .direct(true)
                                .price(300f)
                                .outboundDepartureDate("2020-05-09T00:00:00")
                                .inboundDepartureDate("2020-05-11T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(100)
                                        .name("Alpha Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(100)
                                        .name("Alpha Airlines")
                                        .build())
                                .origin(Place.builder()
                                        .placeId(10000)
                                        .cityName("A City")
                                        .build())
                                .destination(Place.builder()
                                        .placeId(20000)
                                        .cityName("B City")
                                        .build())
                                .build(),
                        ReservedFlights.builder()
                                .direct(false)
                                .price(500f)
                                .outboundDepartureDate("2020-05-10T00:00:00")
                                .inboundDepartureDate("2020-05-12T00:00:00")
                                .outboundCarrier(Carrier.builder()
                                        .carrierId(200)
                                        .name("Beta Airlines")
                                        .build())
                                .inboundCarrier(Carrier.builder()
                                        .carrierId(200)
                                        .name("Beta Airlines")
                                        .build())
                                .origin(Place.builder()
                                        .placeId(10000)
                                        .cityName("A City")
                                        .build())
                                .destination(Place.builder()
                                        .placeId(20000)
                                        .cityName("B City")
                                        .build())
                                .build()),

                convertedFlights);
    }
}
