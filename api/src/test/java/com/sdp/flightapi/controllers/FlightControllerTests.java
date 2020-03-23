package com.sdp.flightapi.controllers;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.mockito.ArgumentMatchers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
@SpringBootTest
@AutoConfigureMockMvc
public class FlightControllerTests {
    @Autowired MockMvc mockMvc;
    @Autowired FlightController flightController;

    static ObjectMapper jsonMapper;

    @BeforeAll
    static void setUpBeforeAll() {
        jsonMapper = new ObjectMapper();
    }

    @Test
    void testGetFlightsCallsFlightServiceGetFlightsNoInboundDate() throws Exception {
        FlightService flightServiceMock = mock(FlightService.class);
        flightController.flightService = flightServiceMock;

        mockMvc.perform(get("/api/get-flights" +
                "?origin={origin}&destination={destination}&outboundDate={outboundDate}",
                "IAH", "SFO", "2020-01-01"));

        verify(flightServiceMock).getFlights("IAH", "SFO",
                "2020-01-01", Optional.empty());
    }

    @Test
    void testGetFlightsCallsFlightServiceGetFlightsIncludingInboundDate() throws Exception {
        FlightService flightServiceMock = mock(FlightService.class);
        flightController.flightService = flightServiceMock;

        mockMvc.perform(get("/api/get-flights" +
                "?origin={origin}&destination={destination}&outboundDate={outboundDate}" +
                "&inboundDate={inboundDate}",
                "IAH", "SFO", "2020-01-01", "2020-01-02"));

        verify(flightServiceMock).getFlights("IAH", "SFO",
                "2020-01-01", Optional.of("2020-01-02"));
    }

    @Test
    void testPostReservedFlight() throws Exception {
        FlightDao flightDaoMock = mock(FlightDao.class);
        flightController.flightDao = flightDaoMock;

        mockMvc.perform(post("/api/post-reserved-flight").header(
                "Content-Type", "application/json")
            .content(jsonMapper.writeValueAsString(new ReservedFlights())));

        verify(flightDaoMock).save(ArgumentMatchers.any(ReservedFlights.class));
    }


    @Test
    void testGetReservedFlights() throws Exception {
        FlightDao flightDaoMock = mock(FlightDao.class);
        flightController.flightDao = flightDaoMock;

        mockMvc.perform(get("/api/get-reserved-flights"));

        verify(flightDaoMock).findAll();
    }

    /*@GetMapping(path = "/get-reserved-flight-fliter-descending-sort-price")
    public List<ReservedFlights> FlightFilterPriceDescending(){
//ASCENDING SORT
        ArrayList<ReservedFlights> ReservedFlightsHolder = (ArrayList<ReservedFlights>) flightDao.findAll();
        Collections.sort(ReservedFlightsHolder, (Comparator<ReservedFlights>) (r1, r2) -> {
                    return Float.valueOf(r2.getPrice()).compareTo(r1.getPrice());
                }
        );
        return ReservedFlightsHolder;
    }*/

    @Test
    void testFilterPriceAscending() throws Exception{

        mockMvc.perform(get("/api/get-reserved-flight-fliter-ascending-sort-price")).andExpect(status().isOk());

    }
    @Test
    void testFilterPriceDescending() throws Exception{

        mockMvc.perform(get("/api/get-reserved-flight-fliter-descending-sort-price")).andExpect(status().isOk());

    }
    @Test
    void testFilterDateAscending() throws Exception{

        mockMvc.perform(get("/api/get-reserved-flight-filter-date-ascending")).andExpect(status().isOk());

    }  @Test
    void testFilterDateDescending() throws Exception{
        FlightDao flightDaoMock = mock(FlightDao.class);
      var Result = mockMvc.perform(get("/api/get-reserved-flight-filter-date-descending").contentType("application/json")).andReturn();
        var body = Result.getResponse().getContentAsString();

    }


    @Test
    void testGetUsersReservedFlights() throws Exception {
        FlightDao flightDaoMock = mock(FlightDao.class);
        flightController.flightDao = flightDaoMock;

        mockMvc.perform(get("/api/get-users-reserved-flights?userName={userName}", "user1"));

        verify(flightDaoMock).findByUserName("user1");
    }
}
