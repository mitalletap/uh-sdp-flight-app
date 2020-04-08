package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.models.ReservedFlights;
import org.assertj.core.util.VisibleForTesting;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    @VisibleForTesting
    transient SkyscannerService skyscannerService;
    
    @VisibleForTesting
    transient FilteringService filteringService = new FilteringService();

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
  
    public List<ReservedFlights> filterByDate(List<ReservedFlights> reservedFlightsHolder,boolean choice){
        return filteringService.filterByDate(reservedFlightsHolder,choice);
    }
  
    public List<ReservedFlights> filterByPrice(List<ReservedFlights> reservedFlightsHolder, boolean choice) {
        return filteringService.filterByPrice(reservedFlightsHolder, choice);
    }
  
    public List<ReservedFlights> filterByCityOrigin(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        return filteringService.filterByCityOrigin(reservedFlightsHolder, ascending);
    }
  
    public List<ReservedFlights> filterByCityDestination(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        return filteringService.filterByCityDestination(reservedFlightsHolder, ascending);
    }



}


