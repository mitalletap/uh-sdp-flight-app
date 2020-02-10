package com.sdp.flightapi.models;

import javax.validation.constraints.NotBlank;
import java.sql.Date;
import java.util.UUID;

public class ReservedFlights {
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

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(float price) {
        this.price = price;
    }

    public Date getDepartureDate() {
        return departureDate;
    }

    public void setDepartureDate(Date departureDate) {
        this.departureDate = departureDate;
    }

    public String getOriginId() {
        return originId;
    }

    public void setOriginId(String originId) {
        this.originId = originId;
    }

    public String getOriginIataCode() {
        return originIataCode;
    }

    public void setOriginIataCode(String originIataCode) {
        this.originIataCode = originIataCode;
    }

    public String getOriginName() {
        return originName;
    }

    public void setOriginName(String originName) {
        this.originName = originName;
    }

    public String getOriginCityName() {
        return originCityName;
    }

    public void setOriginCityName(String originCityName) {
        this.originCityName = originCityName;
    }

    public String getOriginCityId() {
        return originCityId;
    }

    public void setOriginCityId(String originCityId) {
        this.originCityId = originCityId;
    }

    public String getDestinationId() {
        return destinationId;
    }

    public void setDestinationId(String destinationId) {
        this.destinationId = destinationId;
    }

    public String getDestinationIataCode() {
        return destinationIataCode;
    }

    public void setDestinationIataCode(String destinationIataCode) {
        this.destinationIataCode = destinationIataCode;
    }

    public String getDestinationName() {
        return destinationName;
    }

    public void setDestinationName(String destinationName) {
        this.destinationName = destinationName;
    }

    public String getDestinationCityName() {
        return destinationCityName;
    }

    public void setDestinationCityName(String destinationCityName) {
        this.destinationCityName = destinationCityName;
    }

    public String getDestinationCityId() {
        return destinationCityId;
    }

    public void setDestinationCityId(String destinationCityId) {
        this.destinationCityId = destinationCityId;
    }

    public String getCarrierName() {
        return carrierName;
    }

    public void setCarrierName(String carrierName) {
        this.carrierName = carrierName;
    }

    public String getCarrierId() {
        return carrierId;
    }

    public void setCarrierId(String carrierId) {
        this.carrierId = carrierId;
    }

}
