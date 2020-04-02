package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;

import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public class RawFlightDataToReservedFlightsConverter {

    public List<ReservedFlights> convert(final RawFlightData rawFlightData) {
        final List<ReservedFlights> formattedFlights
                = buildFlightListFromQuotesAndCarriers(rawFlightData);
        loadPlaceData(formattedFlights, rawFlightData);

        return formattedFlights;
    }

    /* default */ static Carrier mapCarrierFromQuoteData(final Quote quote,
                                                         final List<Carrier> carriers,
                                                         final Function<Quote, TripLeg> tripLegSelect) {
        return carriers.stream()
                .filter(carrier -> carrier.getCarrierId()
                        .equals(tripLegSelect.apply(quote)
                                .getCarrierIds()
                                .get(0)))
                .findAny()
                .get();
    }

    /* default */ static Place mapPlaceFromQuoteData(final RawFlightData rawFlightData,
                                                     final Quote quote,
                                                     final Function<TripLeg, Integer> placeIDGetter) {
        return rawFlightData.getPlaces()
                .stream()
                .filter(place -> place.getPlaceId()
                        .equals(placeIDGetter.apply(quote.getOutboundLeg())))
                .findAny()
                .get();
    }

    /* default */ static void setDepartureDates(final ReservedFlights formattedFlight,
                                                final Quote quote) {
        formattedFlight.setOutboundDepartureDate(quote.getOutboundLeg()
                .getDepartureDate());
        if(quote.getInboundLeg() != null) {
            formattedFlight.setInboundDepartureDate(quote.getInboundLeg()
                    .getDepartureDate());
        }
    }

    /* default */ static ReservedFlights buildFlightFromQuoteAndCarriers(final Quote quote,
                                                                         final List<Carrier> carriers) {
        final ReservedFlights formattedFlight = new ReservedFlights();

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

    /* default */ static List<ReservedFlights> buildFlightListFromQuotesAndCarriers(final RawFlightData rawFlightData) {
        return rawFlightData.getQuotes()
                .stream()
                .map(quote -> buildFlightFromQuoteAndCarriers(quote, rawFlightData.getCarriers()))
                .collect(Collectors.toList());
    }

    /* default */ static void loadPlaceData(final List<ReservedFlights> formattedFlights,
                                            final RawFlightData rawFlightData) {
        formattedFlights.forEach(flight -> {
            flight.setOrigin(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), TripLeg::getOriginId));

            flight.setDestination(mapPlaceFromQuoteData(rawFlightData,
                    rawFlightData.getQuotes().get(0), TripLeg::getDestinationId));
        });
    }
}
