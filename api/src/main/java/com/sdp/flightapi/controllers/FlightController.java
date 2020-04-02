package com.sdp.flightapi.controllers;

import com.sdp.flightapi.dao.FlightDao;
import com.sdp.flightapi.models.ReservedFlights;
import com.sdp.flightapi.services.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.Comparator;

@RequestMapping("api")
@RestController
public class FlightController {
    @Autowired
    FlightDao flightDao;

    FlightService flightService;

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
  
    @PostMapping(path = "/post-reserved-flight")
    public String saveFlight(@RequestBody ReservedFlights reservedFlights){
        flightDao.save(reservedFlights);
        return "Added reserved :flight with info " + reservedFlights.getId();
    }

    @GetMapping(path = "/get-reserved-flight-fliter-ascending-sort-price")
    public List<ReservedFlights> FlightFilterPrice(){
//ASCENDING SORT
        ArrayList<ReservedFlights> ReservedFlightsHolder = (ArrayList<ReservedFlights>) flightDao.findAll();
        return flightService.filterByPrice(ReservedFlightsHolder, true);
        /*Collections.sort(ReservedFlightsHolder, (Comparator<ReservedFlights>) (r1, r2) -> {
        return Float.valueOf(r1.getPrice()).compareTo(r2.getPrice());
        }
        );*/
    }
    @GetMapping(path = "/get-reserved-flight-fliter-descending-sort-price")
    public List<ReservedFlights> FlightFilterPriceDescending(){
//ASCENDING SORT
        ArrayList<ReservedFlights> ReservedFlightsHolder = (ArrayList<ReservedFlights>) flightDao.findAll();
        Collections.sort(ReservedFlightsHolder, (Comparator<ReservedFlights>) (r1, r2) -> {
                    return Float.valueOf(r2.getPrice()).compareTo(r1.getPrice());
                }
        );
        return ReservedFlightsHolder;
    }

    @GetMapping(path = "/get-reserved-flight-filter-date-descending")
    public List<ReservedFlights> FlightFilterDateDescending(){
        ArrayList<ReservedFlights> ReservedFlightsHolder = (ArrayList<ReservedFlights>) flightDao.findAll();
        Collections.sort(ReservedFlightsHolder, (Comparator<ReservedFlights>) (r1, r2) -> {
            return String.valueOf(r2.getOutboundDepartureDate()).compareTo(r1.getOutboundDepartureDate());
                }

        );
        return ReservedFlightsHolder;
    }

    @GetMapping(path = "/get-reserved-flight-filter-date-ascending")
    public List<ReservedFlights> FlightFilterDateAscending(){
        ArrayList<ReservedFlights> ReservedFlightsHolder = (ArrayList<ReservedFlights>) flightDao.findAll();
        Collections.sort(ReservedFlightsHolder, (Comparator<ReservedFlights>) (r1, r2) -> {
                    return String.valueOf(r1.getOutboundDepartureDate()).compareTo(r2.getOutboundDepartureDate());
                }

        );
        return ReservedFlightsHolder;
    }



    @GetMapping(path = "/get-reserved-flights")
    public List<ReservedFlights> getReservedFlights(){

        return flightDao.findAll();
    }

    @GetMapping(path = "/get-users-reserved-flights")
    public List<ReservedFlights> getUsersReservedFlights(@RequestParam String userName){
        return flightDao.findByUserName(userName);
    }
}
