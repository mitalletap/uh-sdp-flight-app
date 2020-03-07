package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class RawFlightDataToReservedFlightsConverter {
    public List<ReservedFlights> convert(RawFlightData rawFlightData) {
        List<ReservedFlights> formattedFlights
                = initializeWithQuoteAndCarrierData(rawFlightData);
        loadPlaceData(formattedFlights, rawFlightData);
        loadDateData(formattedFlights, rawFlightData);

        return formattedFlights;
    }

    static Carrier mapOutboundCarrierFromQuoteData(RawFlightData rawFlightData, Quote quote) {
        return rawFlightData.getCarriers()
                .stream()
                .filter(carrier -> carrier.getCarrierId()
                        .equals(quote.getOutboundLeg()
                            .getCarrierIds()
                            .get(0)))
                .findAny()
                .get();
    }

    static Place mapPlaceFromQuoteData(RawFlightData rawFlightData,
                                       Quote quote,
                                       Function<OutboundLeg, Integer> placeIDGetter) {
        return rawFlightData.getPlaces()
                .stream()
                .filter(place -> place.getPlaceId()
                        .equals(placeIDGetter.apply(quote.getOutboundLeg())))
                .findAny()
                .get();
    }

    static List<ReservedFlights> initializeWithQuoteAndCarrierData(RawFlightData rawFlightData) {
        return rawFlightData.getQuotes()
                .stream()
                .map(quote -> {
                    ReservedFlights formattedFlight = new ReservedFlights();
                    formattedFlight.setDirect(quote.getDirect());
                    formattedFlight.setPrice(quote.getMinPrice()
                            .floatValue());
                    formattedFlight.setOutboundCarrier(mapOutboundCarrierFromQuoteData(rawFlightData, quote));
                    return formattedFlight;
                }).collect(Collectors.toList());
    }

    static void loadPlaceData(List<ReservedFlights> formattedFlights, RawFlightData rawFlightData) {
        formattedFlights.forEach(flight -> {
            flight.setOrigin(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), OutboundLeg::getOriginId));

            flight.setDestination(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), OutboundLeg::getDestinationId));
        });
    }

    static void loadDateData(List<ReservedFlights> formattedFlights, RawFlightData rawFlightData) {
        formattedFlights.forEach(
                flight -> flight.setDepartureDate(
                        rawFlightData.getQuotes()
                                .get(0)
                                .getOutboundLeg()
                                .getDepartureDate())
        );
    }
}
