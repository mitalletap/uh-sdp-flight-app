package com.sdp.flightapi.controllers;

import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
@RestController
public class FlightController {
    private final FlightService flightService;

    @Autowired
    private FlightDao flightDao;

    @Autowired
    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping(path = "/get-flights")
    public Object getFlights(@RequestParam String origin,
                             @RequestParam String destination,
                             @RequestParam String outboundDate,
                             @RequestParam Optional<String> inboundDate) {
        //GET request that returns list of examples from Skyscanner web API
        return flightService.getFlights(
                origin,
                destination,
                outboundDate,
                inboundDate
        );
    }

    @PostMapping("/post-reserved-flight")
    public String saveFlight(@RequestBody ReservedFlights reservedFlights) {
        flightDao.save(reservedFlights);
        return "Added reserved flight with info " + reservedFlights.getId();
    }

    @GetMapping("/get-reserved-flights")
    public List<ReservedFlights> getReservedFlights() {
        return flightDao.findAll();
    }

    @GetMapping("/get-users-reserved-flights")
    public List<ReservedFlights> getUsersReservedFlights(@RequestParam String userName) {
        return flightDao.findByUserName(userName);
    }
}
