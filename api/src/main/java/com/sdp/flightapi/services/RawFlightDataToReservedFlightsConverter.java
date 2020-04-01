package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class RawFlightDataToReservedFlightsConverter {

    public List<ReservedFlights> convert(RawFlightData rawFlightData) {
        List<ReservedFlights> formattedFlights
                = buildFlightListFromQuotesAndCarriers(rawFlightData);
        loadPlaceData(formattedFlights, rawFlightData);

        return formattedFlights;
    }

    static Carrier mapCarrierFromQuoteData(Quote quote, List<Carrier> carriers,
                                           Function<Quote, TripLeg> tripLegSelect) {
        return carriers.stream()
                .filter(carrier -> carrier.getCarrierId()
                        .equals(tripLegSelect.apply(quote)
                                .getCarrierIds()
                                .get(0)))
                .findAny()
                .get();
    }

    static Place mapPlaceFromQuoteData(RawFlightData rawFlightData,
                                       Quote quote,
                                       Function<TripLeg, Integer> placeIDGetter) {
        return rawFlightData.getPlaces()
                .stream()
                .filter(place -> place.getPlaceId()
                        .equals(placeIDGetter.apply(quote.getOutboundLeg())))
                .findAny()
                .get();
    }

    static void setDepartureDates(ReservedFlights formattedFlight, Quote quote) {
        formattedFlight.setOutboundDepartureDate(quote.getOutboundLeg()
                .getDepartureDate());
        if(quote.getInboundLeg() != null) {
            formattedFlight.setInboundDepartureDate(quote.getInboundLeg()
                    .getDepartureDate());
        }
    }

    static ReservedFlights buildFlightFromQuoteAndCarriers(Quote quote, List<Carrier> carriers) {
        ReservedFlights formattedFlight = new ReservedFlights();

        formattedFlight.setDirect(quote.getDirect());
        formattedFlight.setPrice(quote.getMinPrice()
                .floatValue());
        setDepartureDates(formattedFlight, quote);

        formattedFlight.setOutboundCarrier(mapCarrierFromQuoteData(quote, carriers, Quote::getOutboundLeg));
        if(quote.getInboundLeg() != null) {
            formattedFlight.setInboundCarrier(mapCarrierFromQuoteData(quote, carriers, Quote::getInboundLeg));
        }

        return formattedFlight;
    }

    static List<ReservedFlights> buildFlightListFromQuotesAndCarriers(RawFlightData rawFlightData) {
        return rawFlightData.getQuotes()
                .stream()
                .map(quote -> buildFlightFromQuoteAndCarriers(quote, rawFlightData.getCarriers()))
                .collect(Collectors.toList());
    }

    static void loadPlaceData(List<ReservedFlights> formattedFlights, RawFlightData rawFlightData) {
        formattedFlights.forEach(flight -> {
            flight.setOrigin(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), TripLeg::getOriginId));

            flight.setDestination(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), TripLeg::getDestinationId));
        });
    }
}
