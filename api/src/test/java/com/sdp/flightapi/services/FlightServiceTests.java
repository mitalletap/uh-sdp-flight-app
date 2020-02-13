package com.sdp.flightapi.services;

import com.sdp.flightapi.dao.FlightDao;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.web.client.RestTemplate;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;

@SpringBootTest
public class FlightServiceTests {
    @Test
    public void testServiceShouldCallRestTemplateExchange() throws Exception {
        RestTemplate restTemplateMock = mock(RestTemplate.class);

        FlightService flightService = new FlightService();
        flightService.setRestTemplate(restTemplateMock);

        flightService.getFlights();
        verify(restTemplateMock).exchange(
                ArgumentMatchers.any(String.class),
                ArgumentMatchers.any(HttpMethod.class),
                ArgumentMatchers.any(HttpEntity.class),
                ArgumentMatchers.any(Class.class)
        );
    }
}
