package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.models.ReservedFlights;
import org.assertj.core.util.VisibleForTesting;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

import static com.sdp.flightapi.services.FilteringUtils.*;

@Service
public class FlightService {

    @VisibleForTesting
    transient SkyscannerService skyscannerService;

    public FlightService(final WebClient.Builder webClientBuilder) {
        skyscannerService = new SkyscannerService(webClientBuilder);
    }

    public List<ReservedFlights> getFlights(final String origin,
                                            final String destination,
                                            final String outboundDate,
                                            @Nullable final Optional<String> inboundDate) {
        final RawFlightData rawFlightData = skyscannerService.getFlights(
                parameterString(origin, destination, outboundDate, inboundDate));
        return FlightConversionUtils.convert(rawFlightData);
    }

    @VisibleForTesting
    String urlCodedOriginOrDestination(final String iataCode) {
        return iataCode + "-sky/";
    }

    @VisibleForTesting
    String datesString(final String outboundDate,
                       @Nullable final Optional<String> inboundDate) {
        return outboundDate + (
                inboundDate.map(s -> "/" + s)
                    .orElse(""));
    }

    @VisibleForTesting
    String parameterString(final String origin,
                           final String destination,
                           final String outboundDate,
                           @Nullable final Optional<String> inboundDate) {
        return urlCodedOriginOrDestination(origin) +
                urlCodedOriginOrDestination(destination) +
                datesString(outboundDate, inboundDate);
    }
<<<<<<< Updated upstream

    public List<ReservedFlights> filterByPrice(final List<ReservedFlights> flights,
                                               final boolean ascending) {
        return sortBy(PRICE, ascending, flights);
    }

    public List<ReservedFlights> filterByOutboundDeparture(final List<ReservedFlights> flights,
                                                           final boolean ascending) {
        return sortBy(OUT_DEPARTURE, ascending, flights);
    }

    public List<ReservedFlights> filterByInboundDeparture(final List<ReservedFlights> flights,
                                                           final boolean ascending) {
        return sortBy(IN_DEPARTURE, ascending, flights);
    }

    public List<ReservedFlights> filterByCityOrigin(final List<ReservedFlights> flights,
                                                    final boolean ascending) {
        return sortBy(ORIGIN_CITY, ascending, flights);
    }

    public List<ReservedFlights> filterByCityDestination(final List<ReservedFlights> flights,
                                                         final boolean ascending) {
        return sortBy(DEST_CITY, ascending, flights);
=======

    public List<ReservedFlights> filterBy(final String sortBy,
                                          final boolean ascending,
                                          final List<ReservedFlights> userFlights) {
        return FILTERING_METHODS.get(sortBy).apply(ascending,userFlights);
>>>>>>> Stashed changes
    }
}


