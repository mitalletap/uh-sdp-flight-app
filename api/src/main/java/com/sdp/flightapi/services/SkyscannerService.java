package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class SkyscannerService {
    private final transient WebClient webClient;
    private final static String SEARCH_URL = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/" +
            "apiservices/browsequotes/v1.0/US/USD/en-US/";
    private final static String X_RAPIDAPI_KEY = "c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923";

    public SkyscannerService(final WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(SEARCH_URL)
                .build();
    }

    public RawFlightData getFlights(final String uri) {
        return this.webClient.get()
                .uri(uri)
                .header("X-RapidAPI-Key", X_RAPIDAPI_KEY)
                .retrieve()
                .bodyToMono(RawFlightData.class)
                .block();
    }
}
