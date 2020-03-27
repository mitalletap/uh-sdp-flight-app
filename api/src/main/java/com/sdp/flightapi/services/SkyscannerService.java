package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

@Service
public class SkyscannerService {
    private final WebClient webClient;
    private final String searchUrl = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/" +
            "apiservices/browsequotes/v1.0/US/USD/en-US/";
    private final String xRapidApiKey = "c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923";

    public SkyscannerService(WebClient.Builder webClientBuilder) {
        this.webClient = webClientBuilder.baseUrl(searchUrl)
                .build();
    }

    public RawFlightData getFlights(String uri) {
        return this.webClient.get()
                .uri(uri)
                .header("X-RapidAPI-Key", xRapidApiKey)
                .retrieve()
                .bodyToMono(RawFlightData.class)
                .block();
    }
}
