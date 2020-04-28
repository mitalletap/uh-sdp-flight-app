package com.sdp.flightapi.models;

<<<<<<< Updated upstream
=======
import lombok.experimental.UtilityClass;

>>>>>>> Stashed changes
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

<<<<<<< Updated upstream
public final class DateFormatUtils {
    public static SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    public static Date parse(final String dateString) {
=======
@UtilityClass
public final class DateFormatUtils {
    private final SimpleDateFormat DATE_FORMAT = new SimpleDateFormat("yyyy-MM-dd");

    public Date parse(final String dateString) {
>>>>>>> Stashed changes
        try {
            return DATE_FORMAT.parse(dateString);
        } catch (ParseException e) {
            return new Date();
        }
    }
}
