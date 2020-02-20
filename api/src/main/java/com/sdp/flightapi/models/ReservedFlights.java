package com.sdp.flightapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;

@Data
public class ReservedFlights {
    @Id
    private String id;

    private boolean direct;
    private float price;
    private java.sql.Date departureDate;

    private String userName;

    private Place origin;
    private Place destination;

    private Carrier outboundCarrier;
    private Carrier inboundCarrier;
}
