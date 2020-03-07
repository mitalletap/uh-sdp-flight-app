package com.sdp.flightapi.dao;

import com.sdp.flightapi.models.ReservedFlights;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource(collectionResourceRel = "flights", path = "flights")
public interface FlightDao extends MongoRepository<ReservedFlights, String> {
    List<ReservedFlights> findByUserName(@Param("name") String name);
}