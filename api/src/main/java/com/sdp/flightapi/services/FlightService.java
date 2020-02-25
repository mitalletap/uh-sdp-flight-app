package com.sdp.flightapi.services;

import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

@Service
public class FlightService {
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

        return restTemplate.exchange(SERVICE_URL, HttpMethod.GET, entity, Object.class);
    }
}
