package com.sdp.flightapi.services;

import com.sdp.flightapi.models.*;

import java.util.Collections;
import java.util.List;

class RawFlightDataMockData {
    static RawFlightData generateOneWay() {
        return RawFlightData.builder()
                .quotes(List.of(
                        Quote.builder()
                                .minPrice(200d)
                                .direct(true)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(100))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-09T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(300d)
                                .direct(false)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(200))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-10T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(250d)
                                .direct(true)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(300))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-11T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(300d)
                                .direct(false)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(500))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-12T00:00:00")
                                        .build())
                                .build()))

                .places(List.of(
                        Place.builder()
                                .placeId(10000)
                                .cityName("A City")
                                .build(),
                        Place.builder()
                                .placeId(20000)
                                .cityName("B City")
                                .build()))

                .carriers(List.of(
                        Carrier.builder()
                                .carrierId(100)
                                .name("Alpha Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(200)
                                .name("Beta Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(300)
                                .name("Gamma Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(500)
                                .name("Epsilon Airlines")
                                .build()))

                .currencies(Collections.emptyList())

                .build();
    }

    static RawFlightData generateRoundTrip() {
        return RawFlightData.builder()
                .quotes(List.of(
                        Quote.builder()
                                .minPrice(300d)
                                .direct(true)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(100))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-09T00:00:00")
                                        .build())
                                .inboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(100))
                                        .originId(20000)
                                        .destinationId(10000)
                                        .departureDate("2020-05-11T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(500d)
                                .direct(false)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(200))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-10T00:00:00")
                                        .build())
                                .inboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(200))
                                        .originId(20000)
                                        .destinationId(10000)
                                        .departureDate("2020-05-12T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(350d)
                                .direct(true)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(300))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-11T00:00:00")
                                        .build())
                                .inboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(300))
                                        .originId(20000)
                                        .destinationId(10000)
                                        .departureDate("2020-05-13T00:00:00")
                                        .build())
                                .build(),
                        Quote.builder()
                                .minPrice(450d)
                                .direct(false)
                                .outboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(500))
                                        .originId(10000)
                                        .destinationId(20000)
                                        .departureDate("2020-05-12T00:00:00")
                                        .build())
                                .inboundLeg(TripLeg.builder()
                                        .carrierIds(Collections.singletonList(500))
                                        .originId(20000)
                                        .destinationId(10000)
                                        .departureDate("2020-05-14T00:00:00")
                                        .build())
                                .build()))

                .places(List.of(
                        Place.builder()
                                .placeId(10000)
                                .cityName("A City")
                                .build(),
                        Place.builder()
                                .placeId(20000)
                                .cityName("B City")
                                .build()))

                .carriers(List.of(
                        Carrier.builder()
                                .carrierId(100)
                                .name("Alpha Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(200)
                                .name("Beta Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(300)
                                .name("Gamma Airlines")
                                .build(),
                        Carrier.builder()
                                .carrierId(500)
                                .name("Epsilon Airlines")
                                .build()))

                .currencies(Collections.emptyList())

                .build();
    }
}
