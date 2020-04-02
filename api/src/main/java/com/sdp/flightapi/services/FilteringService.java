package com.sdp.flightapi.services;

import com.sdp.flightapi.models.ReservedFlights;

import java.util.List;
import java.util.stream.Collectors;

public class FilteringService {
    public List<ReservedFlights> filterByPrice(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        return reservedFlightsHolder.stream()
                .sorted((r1, r2) -> Float.compare(r1.getPrice(), r2.getPrice()))
                .collect(Collectors.toList());
    }
}
