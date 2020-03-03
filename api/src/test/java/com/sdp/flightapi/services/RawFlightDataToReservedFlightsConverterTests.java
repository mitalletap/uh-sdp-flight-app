package com.sdp.flightapi.services;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.sdp.flightapi.models.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
public class RawFlightDataToReservedFlightsConverterTests {

    static RawFlightDataToReservedFlightsConverter converter;
    static ObjectMapper objectMapper;
    RawFlightData rawFlightData;

    @BeforeAll
    static void setUpBeforeAll() {
        converter = new RawFlightDataToReservedFlightsConverter();
        objectMapper = new ObjectMapper();
    }

    @BeforeEach
    void setUp() throws JsonProcessingException {
        rawFlightData = RawFlightDataMockData.generateMockRawFlightData(objectMapper);
    }

    @Test
    void testBuildFlightFromQuoteAndCarriers() {
        ReservedFlights flight0 =
                RawFlightDataToReservedFlightsConverter.buildFlightFromQuoteAndCarriers(
                        rawFlightData.getQuotes().get(0), rawFlightData.getCarriers());
        ReservedFlights flight1 =
                RawFlightDataToReservedFlightsConverter.buildFlightFromQuoteAndCarriers(
                        rawFlightData.getQuotes().get(1), rawFlightData.getCarriers());


        assertAll(
                () -> assertTrue(flight0.isDirect()),
                () -> assertEquals(300f, flight0.getPrice()),
                () -> assertEquals("Alpha Airlines", flight0.getOutboundCarrier()
                        .getName()),
                () -> assertEquals("Alpha Airlines", flight0.getInboundCarrier()
                        .getName()),
                () -> assertEquals("2020-05-09T00:00:00", flight0.getOutboundDepartureDate()),
                () -> assertEquals("2020-05-11T00:00:00", flight0.getInboundDepartureDate())
        );
        assertAll(
                () -> assertFalse(flight1.isDirect()),
                () -> assertEquals(500f, flight1.getPrice()),
                () -> assertEquals("Beta Airlines", flight1.getOutboundCarrier()
                        .getName()),
                () -> assertEquals("Beta Airlines", flight1.getInboundCarrier()
                        .getName()),
                () -> assertEquals("2020-05-10T00:00:00", flight1.getOutboundDepartureDate()),
                () -> assertEquals("2020-05-12T00:00:00", flight1.getInboundDepartureDate())
        );
    }

    @Test
    void testBuildFlightListFromQuotesAndCarriers() {
        List<ReservedFlights> reservedFlights
                = RawFlightDataToReservedFlightsConverter
                    .buildFlightListFromQuotesAndCarriers(rawFlightData);

        assertAll(
                () -> assertEquals(rawFlightData.getQuotes()
                                .stream()
                                .map(Quote::getDirect)
                                .collect(Collectors.toList()),
                        reservedFlights.stream()
                                .map(ReservedFlights::isDirect)
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("Alpha Airlines", "Beta Airlines",
                        "Gamma Airlines", "Epsilon Airlines"),
                        reservedFlights.stream()
                                .map(flight -> flight
                                        .getOutboundCarrier()
                                        .getName())
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("Alpha Airlines", "Beta Airlines",
                        "Gamma Airlines", "Epsilon Airlines"),
                        reservedFlights.stream()
                                .map(flight -> flight
                                        .getInboundCarrier()
                                        .getName())
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList(300f, 500f, 350f, 450f),
                        reservedFlights.stream()
                                .map(ReservedFlights::getPrice)
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("2020-05-09T00:00:00", "2020-05-10T00:00:00",
                            "2020-05-11T00:00:00", "2020-05-12T00:00:00"),
                        reservedFlights.stream()
                                .map(ReservedFlights::getOutboundDepartureDate)
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("2020-05-11T00:00:00", "2020-05-12T00:00:00",
                        "2020-05-13T00:00:00", "2020-05-14T00:00:00"),
                        reservedFlights.stream()
                                .map(ReservedFlights::getInboundDepartureDate)
                                .collect(Collectors.toList()))
        );
    }

    @Test
    void testLoadPlaceData() {
        List<ReservedFlights> reservedFlights
                = List.of(new ReservedFlights(), new ReservedFlights());

        RawFlightDataToReservedFlightsConverter.loadPlaceData(reservedFlights, rawFlightData);

        assertAll(
                () -> assertTrue(reservedFlights.stream()
                        .allMatch(flight -> flight
                                .getOrigin()
                                .getCityName().equals("A City"))),

                () -> assertTrue(reservedFlights.stream()
                        .allMatch(flight -> flight
                                .getDestination()
                                .getCityName().equals("B City")))
        );
    }

    @Test
    void testConvertRawFlightDataWithNoQuotesGeneratesEmptyListOfReservedFlights() {
        rawFlightData.setQuotes(Collections.emptyList());

        List<ReservedFlights> convertedFlightsList
                = converter.convert(rawFlightData);

        assertEquals(0, convertedFlightsList.size());
    }

    @Test
    void testConvertRawFlightDataWithOnlyDirectQuoteGeneratesListWithOneReservedFlight() {
        rawFlightData.setQuotes(Collections.singletonList(
                rawFlightData.getQuotes()
                        .get(0)));

        List<ReservedFlights> convertedFlights
                = converter.convert(rawFlightData);

        assertEquals(1, convertedFlights.size());

        assertAll(
                () -> assertTrue(convertedFlights.get(0).isDirect()),
                () -> assertEquals("Alpha Airlines",
                        convertedFlights.get(0)
                                .getOutboundCarrier()
                                .getName()),
                () -> assertEquals(300f,
                        convertedFlights.get(0)
                                .getPrice()),
                () -> assertEquals("A City",
                        convertedFlights.get(0)
                                .getOrigin()
                                .getCityName()),
                () -> assertEquals("B City",
                        convertedFlights.get(0)
                                .getDestination()
                                .getCityName()),
                () -> assertEquals("2020-05-09T00:00:00",
                        convertedFlights.get(0)
                                .getOutboundDepartureDate())
        );
    }

    @Test
    void testConvertRawFlightDataWithOnlyIndirectQuoteGeneratesListWithOneReservedFlight() {
        rawFlightData.setQuotes(Collections.singletonList(
                rawFlightData.getQuotes()
                        .get(1)));

        List<ReservedFlights> convertedFlights
                = converter.convert(rawFlightData);

        assertEquals(1, convertedFlights.size());

        assertAll(
                () -> assertFalse(convertedFlights.get(0).isDirect()),
                () -> assertEquals("Beta Airlines",
                        convertedFlights.get(0)
                                .getOutboundCarrier()
                                .getName()),
                () -> assertEquals(500f,
                        convertedFlights.get(0)
                                .getPrice()),
                () -> assertEquals("A City",
                        convertedFlights.get(0)
                                .getOrigin()
                                .getCityName()),
                () -> assertEquals("B City",
                        convertedFlights.get(0)
                                .getDestination()
                                .getCityName()),
                () -> assertEquals("2020-05-10T00:00:00",
                        convertedFlights.get(0)
                                .getOutboundDepartureDate())
        );
    }

    @Test
    void testConvertRawFlightDataWithDirectAndIndirectQuoteGeneratesPairOfReservedFlights() {
        rawFlightData.setQuotes(rawFlightData.getQuotes().subList(0, 2));

        List<ReservedFlights> convertedFlights
                = converter.convert(rawFlightData);

        assertEquals(2, convertedFlights.size());

        assertAll(
                () -> assertEquals(Arrays.asList(true, false),
                        convertedFlights.stream()
                                .map(ReservedFlights::isDirect)
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList("Alpha Airlines", "Beta Airlines"),
                        convertedFlights.stream()
                                .map(flight -> flight
                                        .getOutboundCarrier()
                                        .getName())
                                .collect(Collectors.toList())),

                () -> assertEquals(Arrays.asList(300f, 500f),
                        convertedFlights.stream()
                                .map(ReservedFlights::getPrice)
                                .collect(Collectors.toList())),

                () -> assertTrue(convertedFlights.stream()
                        .allMatch(flight -> flight
                                .getOrigin()
                                .getCityName().equals("A City"))),

                () -> assertTrue(convertedFlights.stream()
                        .allMatch(flight -> flight
                                .getDestination()
                                .getCityName().equals("B City"))),

                () -> assertEquals(Arrays.asList("2020-05-09T00:00:00", "2020-05-10T00:00:00"),
                        convertedFlights.stream()
                                .map(ReservedFlights::getOutboundDepartureDate)
                                .collect(Collectors.toList()))
        );
    }
}
