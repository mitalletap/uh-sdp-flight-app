package com.sdp.flightapi.services;
import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
    SkyscannerService skyscannerService;
    RawFlightDataToReservedFlightsConverter dataConverter;
    FilteringService filteringService;

    public FlightService(WebClient.Builder webClientBuilder) {
        dataConverter = new RawFlightDataToReservedFlightsConverter();
        skyscannerService = new SkyscannerService(webClientBuilder);
    }

    public List<ReservedFlights> getFlights(String origin, String destination,
                                            String outboundDate, @Nullable Optional<String> inboundDate) {
        RawFlightData rawFlightData = skyscannerService.getFlights(
                parameterString(origin, destination, outboundDate, inboundDate));
        return dataConverter.convert(rawFlightData);
    }

    String urlCodedOriginOrDestination(String iataCode) {
        return iataCode + "-sky/";
    }

    String datesString(String outboundDate, @Nullable Optional<String> inboundDate) {
        return outboundDate + (
                inboundDate.map(s -> "/" + s)
                    .orElse(""));
    }

    String parameterString(String origin, String destination,
                           String outboundDate, @Nullable Optional<String> inboundDate) {
        return urlCodedOriginOrDestination(origin) +
                urlCodedOriginOrDestination(destination) +
                datesString(outboundDate, inboundDate);
    }

    public List<ReservedFlights> filterByPrice(ArrayList<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        return filteringService.filterByPrice(reservedFlightsHolder, ascending);
    }
}


