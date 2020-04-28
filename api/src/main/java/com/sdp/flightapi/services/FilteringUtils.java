package com.sdp.flightapi.services;

import com.sdp.flightapi.models.DateFormatUtils;
import com.sdp.flightapi.models.ReservedFlights;

import java.util.Comparator;
import java.util.Date;
import java.util.List;
<<<<<<< Updated upstream
import java.util.function.Function;
import java.util.stream.Collectors;

public final class FilteringUtils {
    public static final Function<ReservedFlights, Float> PRICE =
            ReservedFlights::getPrice;

    public static final Function<ReservedFlights, Date> OUT_DEPARTURE =
            flight -> DateFormatUtils.parse(flight.getOutboundDepartureDate());

    public static final Function<ReservedFlights, Date> IN_DEPARTURE =
            flight -> DateFormatUtils.parse(flight.getInboundDepartureDate());

    public static final Function<ReservedFlights, String> ORIGIN_CITY =
            flight -> flight.getOrigin()
                    .getCityName();

    public static final Function<ReservedFlights, String> DEST_CITY =
            flight -> flight.getDestination()
                    .getCityName();

    private FilteringUtils() {}

    public static <T extends Comparable<? super T>> List<ReservedFlights> sortBy(
=======
import java.util.Map;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.stream.Collectors;

import static com.sdp.flightapi.models.FilteringKeyNames.*;

public final class FilteringUtils {

    private static final Function<ReservedFlights, Float> BY_PRICE =
            ReservedFlights::getPrice;

    private static final Function<ReservedFlights, Date> BY_OUT_DEP_DATE =
            flight -> DateFormatUtils.parse(flight.getOutboundDepartureDate());

    private static final Function<ReservedFlights, Date> BY_IN_DEP_DATE =
            flight -> DateFormatUtils.parse(flight.getInboundDepartureDate());

    private static final Function<ReservedFlights, String> BY_ORIGIN_CITY =
            flight -> flight.getOrigin()
                    .getCityName();

    private static final Function<ReservedFlights, String> BY_DEST_CITY =
            flight -> flight.getDestination()
                    .getCityName();

    public static final Map<String,
            BiFunction<Boolean,
                    List<ReservedFlights>,
                    List<ReservedFlights>>> FILTERING_METHODS = Map.of(

            PRICE,
                (ascending, listOfFlights) -> sortBy(BY_PRICE, ascending, listOfFlights),
            OUTBOUND_DEP_DATE,
                (ascending, listOfFlights) -> sortBy(BY_OUT_DEP_DATE, ascending, listOfFlights),
            INBOUND_DEP_DATE,
                (ascending, listOfFlights) -> sortBy(BY_IN_DEP_DATE, ascending, listOfFlights),
            ORIGIN_CITY,
                (ascending, listOfFlights) -> sortBy(BY_ORIGIN_CITY, ascending, listOfFlights),
            DEST_CITY,
                (ascending, listOfFlights) -> sortBy(BY_DEST_CITY, ascending, listOfFlights)
    );

    private FilteringUtils() {}

    private static <T extends Comparable<? super T>> List<ReservedFlights> sortBy(
>>>>>>> Stashed changes
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
