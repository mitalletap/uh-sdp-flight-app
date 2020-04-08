package com.sdp.flightapi.services;

import com.sdp.flightapi.models.DateFormatUtils;
import com.sdp.flightapi.models.ReservedFlights;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
import java.util.function.Function;
import java.util.stream.Collectors;

public final class FilteringUtils {
    private FilteringUtils() {}

    public static final Function<ReservedFlights, Float> PRICE =
            ReservedFlights::getPrice;

    public static final Function<ReservedFlights, Date> OUTBOUND_DEPARTURE =
            (flight -> DateFormatUtils.parse(flight.getOutboundDepartureDate()));

    public static final Function<ReservedFlights, Date> INBOUND_DEPARTURE =
            (flight -> DateFormatUtils.parse(flight.getInboundDepartureDate()));

    public static final Function<ReservedFlights, String> ORIGIN_CITY =
            (flight -> flight.getOrigin().getCityName());

    public static final Function<ReservedFlights, String> DESTINATION_CITY =
            (flight -> flight.getDestination().getCityName());

    public static <T extends Comparable<? super T>> List<ReservedFlights> sortBy(
            final Function<ReservedFlights, T> propertyExtractor,
            final boolean ascending,
            final List<ReservedFlights> flights) {

        return flights.stream()
                .sorted(ascending ?
                        Comparator.comparing(propertyExtractor) :
                        Comparator.comparing(propertyExtractor).reversed())
                .collect(Collectors.toList());
    }
}
