package com.sdp.flightapi.services;

import com.sdp.flightapi.models.RawFlightData;
import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.lang.Nullable;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.util.List;
import java.util.Optional;

@Service
public class FlightService {

    SkyscannerService skyscannerService;

    public FlightService(WebClient.Builder webClientBuilder) {
        skyscannerService = new SkyscannerService(webClientBuilder);
    }

    public List<ReservedFlights> getFlights(String origin, String destination,
                                          String outboundDate, @Nullable Optional<String> inboundDate) {
        RawFlightData rawFlightData = skyscannerService.getFlights(
                parameterString(origin, destination, outboundDate, inboundDate));
        return RawFlightDataToReservedFlightsConverter.convert(rawFlightData);
    }

    String urlCodedOriginOrDestination(String iataCode) {
        return iataCode + "-sky/";
    }

    String datesString(String outboundDate, @Nullable Optional<String> inboundDate) {
        return outboundDate + (inboundDate.map(s -> "/" + s)
                        .orElse(""));
    }

    @Autowired
    public Object getFlights() {
        RestTemplate restTemplate = new RestTemplate();
        String SERVICE_URL =
                "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/" +
                        "apiservices/browsequotes/v1.0/US/USD/en-US/" +
                        "SFO-sky/JFK-sky/2020-02-20";
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("X-RapidAPI-Key", "c25f6b34acmsh3e88e6211d976dcp1b322cjsn2b02ff0fa923");
        HttpEntity<String> entity = new HttpEntity<String>(headers);

    String parameterString(String origin, String destination,
                           String outboundDate, @Nullable Optional<String> inboundDate) {
        return urlCodedOriginOrDestination(origin) +
                urlCodedOriginOrDestination(destination) +
                datesString(outboundDate, inboundDate);
    }
}
