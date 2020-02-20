package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@Service
public class FlightService {
    private final WebClient webClient;
    private final String flightSearchBaseUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/" +
            "apiservices/browsequotes/v1.0/US/USD/en-US/";

    public FlightService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(flightSearchBaseUrl)
                .build();
    }

    public Mono<RawFlightData> getFlights(String origin, String destination,
                                          String outboundDate, @Nullable Optional<String> inboundDate) {
        return this.webClient.get()
                .uri(parameterString(
                        origin, destination, outboundDate, inboundDate))
                .header("X-RapidAPI-Key", "c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923")
                .retrieve()
                .bodyToMono(RawFlightData.class);
    }

    String urlCodedOriginOrDestination(String iataCode) {
        return iataCode + "-sky/";
    }

    String datesString(String outboundDate, @Nullable Optional<String> inboundDate) {
        return outboundDate + (inboundDate.map(s -> "/" + s)
                        .orElse(""));
    }

    String parameterString(String origin, String destination,
                           String outboundDate, @Nullable Optional<String> inboundDate) {
        return urlCodedOriginOrDestination(origin) +
                urlCodedOriginOrDestination(destination) +
                datesString(outboundDate, inboundDate);
    }

    public List<ReservedFlights> formatFlightList(RawFlightData rawFlightData) {
        return Arrays.asList();
    }
}
