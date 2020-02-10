package com.sdp.flightapi.dao;

import com.sdp.flightapi.models.ReservedFlights;

import java.util.List;
import java.util.UUID;

public interface ExampleDao {
    int insertExample(UUID id, ReservedFlights reservedFlights);

    default int insertExample(ReservedFlights reservedFlights){
        UUID id = UUID.randomUUID();
        return insertExample(id, reservedFlights);
    }

    List<ReservedFlights> selectAllExamples();
}
