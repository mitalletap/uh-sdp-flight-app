package com.sdp.flightapi.repositories;

import com.sdp.flightapi.dao.ExampleDao;
import com.sdp.flightapi.models.Example;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Repository("example")
public class ExampleRepository implements ExampleDao {
    private static List<Example> fakeDB = new ArrayList<>();

    @Override
    public int insertExample(UUID id, Example example) {
        fakeDB.add(new Example(id, example.getMessage()));
        return 0;
    }

    @Override
    public List<Example> selectAllExamples() {
        return fakeDB;
    }
}
