package com.sdp.flightapi.controllers;

import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;
import java.util.Optional;

@RequestMapping("api")
@RestController
public class FlightController {
    private final FlightService flightService;

    @Autowired
    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping(path = "/get-flights")
    public Object getFlights(@RequestParam Optional<String> origin,
                             @RequestParam Optional<String> destination,
                             @RequestParam Optional<String> dateString) {
        //GET request that returns list of examples from fake database
        return flightService.getFlights(
                origin.orElse("SFO"),
                destination.orElse("JFK"),
                dateString.orElse("2020-02-20")
        );
    }
}
