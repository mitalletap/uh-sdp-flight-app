package com.sdp.flightapi.services;
import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
    /* default */ transient SkyscannerService skyscannerService;
    /* default */ transient RawFlightDataToReservedFlightsConverter dataConverter;

    public FlightService(final WebClient.Builder webClientBuilder) {
        dataConverter = new RawFlightDataToReservedFlightsConverter();
        skyscannerService = new SkyscannerService(webClientBuilder);
    }

    public List<ReservedFlights> getFlights(final String origin,
                                            final String destination,
                                            final String outboundDate,
                                            @Nullable final Optional<String> inboundDate) {
        final RawFlightData rawFlightData = skyscannerService.getFlights(
                parameterString(origin, destination, outboundDate, inboundDate));
        return dataConverter.convert(rawFlightData);
    }

    /* default */ String urlCodedOriginOrDestination(final String iataCode) {
        return iataCode + "-sky/";
    }

    /* default */ String datesString(final String outboundDate,
                                     @Nullable final Optional<String> inboundDate) {
        return outboundDate + (
                inboundDate.map(s -> "/" + s)
                    .orElse(""));
    }

    /* default */ String parameterString(final String origin,
                                         final String destination,
                                         final String outboundDate,
                                         @Nullable final Optional<String> inboundDate) {
        return urlCodedOriginOrDestination(origin) +
                urlCodedOriginOrDestination(destination) +
                datesString(outboundDate, inboundDate);
    }
}


