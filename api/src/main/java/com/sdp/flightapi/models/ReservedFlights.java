package com.sdp.flightapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ReservedFlights {
    @Id
    private String id;

    private float price;
    private java.sql.Date departureDate;

    private String userName;

    private String originId;
    private String originIataCode;
    private String originName;
    private String originCityName;
    private String originCityId;

    private String destinationId;
    private String destinationIataCode;
    private String destinationName;
    private String destinationCityName;
    private String destinationCityId;

    private String carrierName;
    private String carrierId;
}
