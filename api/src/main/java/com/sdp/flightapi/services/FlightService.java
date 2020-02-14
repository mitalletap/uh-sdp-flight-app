package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@Service
public class FlightService {
    private final WebClient webClient;
    private final String flightSearchBaseUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/" +
            "apiservices/browsequotes/v1.0/US/USD/en-US/";

    public FlightService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(flightSearchBaseUrl)
                .build();
    }

    public Mono<RawFlightData> getFlights(String origin, String destination, String dateString) {
        return this.webClient.get()
                .uri( originDestinationString(origin, destination) + dateString)
                .header("X-RapidAPI-Key", "c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923")
                .retrieve()
                .bodyToMono(RawFlightData.class);
    }

    String urlCodedOriginOrDestination(String iataCode) {
        String skyCode = "-sky";
        return iataCode + skyCode + "/";
    }

    String originDestinationString(String origin, String destination) {
        return urlCodedOriginOrDestination(origin) + urlCodedOriginOrDestination(destination);
    }
}
