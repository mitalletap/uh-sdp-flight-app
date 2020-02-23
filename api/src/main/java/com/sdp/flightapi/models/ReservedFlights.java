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


    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public boolean isDirect() {
        return direct;
    }

    public void setDirect(boolean direct) {
        this.direct = direct;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public String getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(String departureDate) {
        this.departureDate = departureDate;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public Place getOrigin() {
        return origin;
    }

    public void setOrigin(Place origin) {
        this.origin = origin;
    }

    public Place getDestination() {
        return destination;
    }

    public void setDestination(Place destination) {
        this.destination = destination;
    }

    public Carrier getOutboundCarrier() {
        return outboundCarrier;
    }

    public void setOutboundCarrier(Carrier outboundCarrier) {
        this.outboundCarrier = outboundCarrier;
    }

    public Carrier getInboundCarrier() {
        return inboundCarrier;
    }

    public void setInboundCarrier(Carrier inboundCarrier) {
        this.inboundCarrier = inboundCarrier;
    }
}
