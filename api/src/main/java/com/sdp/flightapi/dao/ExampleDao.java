package com.sdp.flightapi.dao;

import com.sdp.flightapi.models.Example;

import java.util.List;
import java.util.UUID;

public interface ExampleDao {
    int insertExample(UUID id, Example example);

    default int insertExample(Example example){
        UUID id = UUID.randomUUID();
        return insertExample(id, example);
    }

    List<Example> selectAllExamples();
}
