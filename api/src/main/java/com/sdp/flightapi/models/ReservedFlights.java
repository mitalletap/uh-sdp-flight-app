package com.sdp.flightapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "reservedFlights")
public class ReservedFlights {
    @Id
    private Integer id;

    private boolean direct;
    private float price;
    private String departureDate;

    private String userName;

    private Place origin;
    private Place destination;

    private Carrier outboundCarrier;
    private Carrier inboundCarrier;
}
