package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public final class FlightConversionUtils {

    private FlightConversionUtils() {}

    public static List<ReservedFlights> convert(final RawFlightData rawFlightData) {
        final List<ReservedFlights> formattedFlights
                = buildFlightListFromQuotesAndCarriers(rawFlightData);
        return loadPlaceData(formattedFlights, rawFlightData);
    }

    public static Carrier mapCarrierFromQuoteData(final Quote quote,
                                                  final List<Carrier> carriers,
                                                  final Function<Quote, TripLeg> tripLegSelect) {
        return tripLegSelect.apply(quote) == null ?
                null :
                carriers.stream()
                    .filter(carrier -> carrier.getCarrierId()
                            .equals(tripLegSelect.apply(quote)
                                    .getCarrierIds()
                                    .get(0)))
                    .findAny()
                    .orElse(null);
    }

    public static Place mapPlaceFromQuoteData(final RawFlightData rawFlightData,
                                              final Quote quote,
                                              final Function<TripLeg, Integer> placeIDGetter) {
        return rawFlightData.getPlaces()
                .stream()
                .filter(place -> place.getPlaceId()
                        .equals(placeIDGetter.apply(quote.getOutboundLeg())))
                .findAny()
                .orElse(null);
    }

    public static ReservedFlights addDepartureDates(final Quote quote, final ReservedFlights formattedFlight) {
        return formattedFlight.toBuilder()
            .outboundDepartureDate(quote.getOutboundLeg().getDepartureDate())
            .inboundDepartureDate(quote.getInboundLeg() == null ?
                    null :
                    quote.getInboundLeg().getDepartureDate())
            .build();
    }

    public static ReservedFlights buildFlightFromQuoteAndCarriers(final Quote quote,
                                                                  final List<Carrier> carriers) {
        return ReservedFlights.builder()
                .direct(quote.getDirect())
                .price(quote.getMinPrice()
                    .floatValue())
                .outboundCarrier(mapCarrierFromQuoteData(quote, carriers, Quote::getOutboundLeg))
                .inboundCarrier(mapCarrierFromQuoteData(quote, carriers, Quote::getInboundLeg))
                .build();
    }

    public static List<ReservedFlights> buildFlightListFromQuotesAndCarriers(final RawFlightData rawFlightData) {
        return rawFlightData.getQuotes()
                .stream()
                .map(quote -> addDepartureDates(quote,
                        buildFlightFromQuoteAndCarriers(quote, rawFlightData.getCarriers())))
                .collect(Collectors.toList());
    }

    public static List<ReservedFlights> loadPlaceData(final List<ReservedFlights> formattedFlights,
                                                      final RawFlightData rawFlightData) {
        return formattedFlights.stream()
                .map(flight -> flight.toBuilder()
                        .origin(mapPlaceFromQuoteData(rawFlightData,
                                rawFlightData.getQuotes().get(0),
                                TripLeg::getOriginId))
                        .destination(mapPlaceFromQuoteData(rawFlightData,
                                rawFlightData.getQuotes().get(0),
                                TripLeg::getDestinationId))
                        .build())
                .collect(Collectors.toList());
    }
}
