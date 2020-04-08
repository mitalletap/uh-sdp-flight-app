package com.sdp.flightapi.models;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Builder(toBuilder = true)
@NoArgsConstructor
@AllArgsConstructor
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
