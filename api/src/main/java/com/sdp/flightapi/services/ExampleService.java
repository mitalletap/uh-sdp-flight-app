package com.sdp.flightapi.services;

import com.sdp.flightapi.dao.ExampleDao;
import com.sdp.flightapi.models.Example;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExampleService {
    private final ExampleDao exampleDao;

    @Autowired
    public ExampleService(@Qualifier("example") ExampleDao exampleDao) {
        this.exampleDao = exampleDao;
    }

    public int addExample(Example example) {
        return exampleDao.insertExample(example);
    }

    public List<Example> getAllExamples(){
        return exampleDao.selectAllExamples();
    }
}
