package com.sdp.flightapi.services;

import com.sdp.flightapi.models.ReservedFlights;

import java.util.List;
import java.util.stream.Collectors;

public class FilteringService {
        public List<ReservedFlights> filterByPrice(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
            if(ascending == true){
                return reservedFlightsHolder.stream()
                        .sorted((r1, r2) -> Float.compare(r1.getPrice(), r2.getPrice()))
                        .collect(Collectors.toList());
            }
            else{
                return reservedFlightsHolder.stream()
                        .sorted((r1, r2) -> Float.compare(r2.getPrice(), r1.getPrice()))
                        .collect(Collectors.toList());
            }

    }

    public List<ReservedFlights> filterByDate(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        if(ascending == true){
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r1.getOutboundDepartureDate().compareTo(r2.getOutboundDepartureDate()))))
                    .collect(Collectors.toList());
        }
        else{
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r2.getOutboundDepartureDate().compareTo(r1.getOutboundDepartureDate()))))
                    .collect(Collectors.toList());
        }

    }

    public List<ReservedFlights> filterByCityOrigin(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        if(ascending == true){
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r1.getOrigin().getCityName().compareTo(r2.getOrigin().getCityName()))))
                    .collect(Collectors.toList());
        }
        else{
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r2.getOrigin().getCityName().compareTo(r1.getOrigin().getCityName()))))
                    .collect(Collectors.toList());
        }

    }

    public List<ReservedFlights> filterByCityDestination(List<ReservedFlights> reservedFlightsHolder, boolean ascending) {
        if(ascending == true){
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r1.getDestination().getCityName().compareTo(r2.getDestination().getCityName()))))
                    .collect(Collectors.toList());
        }
        else{
            return reservedFlightsHolder.stream()
                    .sorted((r1, r2) -> Integer.parseInt(String.valueOf(r2.getDestination().getCityName().compareTo(r1.getDestination().getCityName()))))
                    .collect(Collectors.toList());
        }

    }


}
