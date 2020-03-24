package com.sdp.flightapi.models;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "reservedFlights")
public class ReservedFlights {
    @Id
    private String id;

    private boolean direct;
    private float price;

    private String userName;

    private Place origin;
    private Place destination;

    private String outboundDepartureDate;
    private String inboundDepartureDate;

    private Carrier outboundCarrier;
    private Carrier inboundCarrier;
    private boolean purchased;
}
