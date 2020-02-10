package com.sdp.flightapi.controllers;

import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import java.util.List;

@RequestMapping("api")
@RestController
public class FlightController {
    private final FlightService flightService;

    @Autowired
    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping(path = "/get-flights")
    public Object getFlights() {
        //GET request that returns list of examples from fake database
        return flightService.getFlights();
    }

    @GetMapping(path = "examples")
    public List<ReservedFlights> getAllExamples() {
        //GET request that returns list of examples from fake database
        return flightService.getAllExamples();
    }

    @PostMapping(path = "examples")
    public void addExample(@Valid @NotNull @RequestBody ReservedFlights reservedFlights) {
        //POST request that adds example from request body to fake database
        flightService.addExample(reservedFlights);
    }
}
