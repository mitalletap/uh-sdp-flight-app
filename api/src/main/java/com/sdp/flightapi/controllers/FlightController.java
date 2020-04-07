package com.sdp.flightapi.controllers;

import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api")
@RestController
public class FlightController {
    @Autowired
    /* default */ transient FlightDao flightDao;

    /* default */ transient FlightService flightService;

    @Autowired
    public FlightController(final FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping(path = "/get-flights")
    public Object getFlights(@RequestParam final String origin,
                             @RequestParam final String destination,
                             @RequestParam final String outboundDate,
                             @RequestParam final Optional<String> inboundDate) {
        //GET request that returns list of examples from Skyscanner web API
        return flightService.getFlights(
                origin,
                destination,
                outboundDate,
                inboundDate
        );
    }
  
    @PostMapping(path = "/post-reserved-flight")
    public ReservedFlights saveFlight(@RequestBody final ReservedFlights reservedFlights,
                                      @RequestParam final boolean purchased){
        reservedFlights.setPurchased(purchased);
        flightDao.save(reservedFlights);
        return reservedFlights;
    }

    @GetMapping(path = "/get-reserved-flights")
    public List<ReservedFlights> getReservedFlights(){
        return flightDao.findAll();
    }

    @GetMapping(path = "/get-users-reserved-flights")
    public List<ReservedFlights> getUsersReservedFlights(@RequestParam final String userName){
        return flightDao.findByUserName(userName);
    }

    @DeleteMapping(path = "/delete-reserved-flight")
    public String deleteUsersReservedFlight(@RequestParam final String flightId){
        flightDao.deleteById(flightId);
        return "Flight by id: "+ flightId + " deleted";
    }
    @GetMapping(path = "/get-reserved-flight-filter-sort-price")
    public List<ReservedFlights> flightFilterPrice(@RequestParam final String userName){
//ASCENDING SORT

        List<ReservedFlights> reservedFlightsHolder =  flightDao.findByUserName(userName);
        return flightService.filterByPrice(reservedFlightsHolder, true);
    }

    @GetMapping(path= "/get-reserved-flight-filter-sort-Date")
    public List<ReservedFlights> flightFilterDate(final String userName){
        List<ReservedFlights> reservedFlightsHolder =  flightDao.findByUserName(userName);
    return flightService.filterByDate(reservedFlightsHolder,true);
    }


}
