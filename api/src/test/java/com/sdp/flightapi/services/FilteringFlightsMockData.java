package com.sdp.flightapi.services;

import com.sdp.flightapi.models.Place;
import com.sdp.flightapi.models.ReservedFlights;

<<<<<<< Updated upstream
public class FilteringFlightsMockData {
    public static final ReservedFlights cheapest_middleOutbound_lateInbound_fromB_toE =
=======
class FilteringFlightsMockData {
    static final ReservedFlights cheapest_middleOutbound_lateInbound_fromB_toE =
>>>>>>> Stashed changes
            ReservedFlights.builder()
                    .price(100f)
                    .outboundDepartureDate("2020-05-03")
                    .inboundDepartureDate("2020-06-04")
                    .origin(Place.builder()
                            .cityName("B")
                            .build())
                    .destination(Place.builder()
                            .cityName("E")
                            .build())
                    .build();

<<<<<<< Updated upstream
    public static final ReservedFlights cheap_earliestOutbound_middleInbound_fromD_toC =
=======
    static final ReservedFlights cheap_earliestOutbound_middleInbound_fromD_toC =
>>>>>>> Stashed changes
            ReservedFlights.builder()
                    .price(200f)
                    .outboundDepartureDate("2020-05-01")
                    .inboundDepartureDate("2020-06-03")
                    .origin(Place.builder()
                            .cityName("D")
                            .build())
                    .destination(Place.builder()
                            .cityName("C")
                            .build())
                    .build();

<<<<<<< Updated upstream
    public static final ReservedFlights middlePrice_latestOutbound_earliestInbound_fromA_toD =
=======
    static final ReservedFlights middlePrice_latestOutbound_earliestInbound_fromA_toD =
>>>>>>> Stashed changes
            ReservedFlights.builder()
                    .price(300f)
                    .outboundDepartureDate("2020-05-05")
                    .inboundDepartureDate("2020-06-01")
                    .origin(Place.builder()
                            .cityName("A")
                            .build())
                    .destination(Place.builder()
                            .cityName("D")
                            .build())
                    .build();

<<<<<<< Updated upstream
    public static final ReservedFlights highPrice_earlyOutbound_latestInbound_fromC_toA =
=======
    static final ReservedFlights highPrice_earlyOutbound_latestInbound_fromC_toA =
>>>>>>> Stashed changes
            ReservedFlights.builder()
                    .price(400f)
                    .outboundDepartureDate("2020-05-02")
                    .inboundDepartureDate("2020-06-05")
                    .origin(Place.builder()
                            .cityName("C")
                            .build())
                    .destination(Place.builder()
                            .cityName("A")
                            .build())
                    .build();

<<<<<<< Updated upstream
    public static final ReservedFlights highestPrice_lateOutbound_earlyInbound_fromE_toB =
=======
    static final ReservedFlights highestPrice_lateOutbound_earlyInbound_fromE_toB =
>>>>>>> Stashed changes
            ReservedFlights.builder()
                    .price(500f)
                    .outboundDepartureDate("2020-05-04")
                    .inboundDepartureDate("2020-06-02")
                    .origin(Place.builder()
                            .cityName("E")
                            .build())
                    .destination(Place.builder()
                            .cityName("B")
                            .build())
                    .build();
}
