package com.sdp.flightapi.repositories;

import com.sdp.flightapi.dao.ExampleDao;
import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("example")
public class ExampleRepository implements ExampleDao {
    private static List<ReservedFlights> fakeDB = new ArrayList<>();

    @Override
    public int insertExample(UUID id, ReservedFlights reservedFlights) {
        //fakeDB.add(new ReservedFlights(id, reservedFlights.getMessage()));
        return 0;
    }

    @Override
    public List<ReservedFlights> selectAllExamples() {
        return fakeDB;
    }
}
