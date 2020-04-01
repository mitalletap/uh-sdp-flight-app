package com.sdp.flightapi.repositories;

import com.sdp.flightapi.dao.FlightDao;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;

import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;


@SpringBootTest
@AutoConfigureMockMvc
class FlightDaoTests {

	@Autowired private MockMvc mockMvc;
	@Autowired private FlightDao flightDao;

	FlightDaoTests() {
	}

	@Test
	void contextLoads() {
	}

	@Test
	public void shouldReturnRepositoryIndex() throws Exception {

		mockMvc.perform(get("/")).andDo(print()).andExpect(status().isOk()).andExpect(
				jsonPath("$._links.flights").exists());
	}

	@Test
	public void shouldCreateEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
                "{\"origin\" : {\"name\" : \"A City\"}, " +
                        "\"destination\" : {\"name\" : \"B City\"}}")).andExpect(
				status().isCreated())
				.andExpect(header().string("Location", containsString("flights/")))
				.andReturn();

		String location = mvcResult.getResponse().getHeader("Location");

		mockMvc.perform(delete(location));
	}

	@Test
	public void shouldRetrieveEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
                "{\"origin\" : {\"name\" : \"A City\"}, " +
                        "\"destination\" : {\"name\" : \"B City\"}}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");
		mockMvc.perform(get(location)).andExpect(status().isOk()).andExpect(
				jsonPath("$.origin.name").value("A City")).andExpect(
				jsonPath("$.destination.name").value("B City"));

		mockMvc.perform(delete(location));
	}

	@Test
	public void shouldQueryEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
                "{\"userName\" : \"User1\", \"origin\" : {\"name\" : \"A City\"}, " +
                        "\"destination\" : {\"name\" : \"B City\"}}"))
				.andExpect(status().isCreated())
				.andReturn();

		String location = mvcResult.getResponse().getHeader("Location");

		mockMvc.perform(
				get("/flights/search/findByUserName?name={name}", "User1")).andExpect(
				status().isOk()).andExpect(
				jsonPath("$._embedded.flights[0].destination.name").value(
						"B City"));

		mockMvc.perform(delete(location));
	}

	@Test
	public void shouldUpdateEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
                "{\"origin\" : {\"name\" : \"A City\"}, " +
                        "\"destination\" : {\"name\" : \"B City\"}}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");

		mockMvc.perform(put(location).content(
                "{\"origin\" : {\"name\" : \"C City\"}, " +
                        "\"destination\" : {\"name\" : \"Z Town\"}}")).andExpect(
				status().isNoContent());

		mockMvc.perform(get(location)).andExpect(status().isOk()).andExpect(
				jsonPath("$.origin.name").value("C City")).andExpect(
				jsonPath("$.destination.name").value("Z Town"));

		mockMvc.perform(delete(location));
	}

	@Test
	public void shouldDeleteEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
                "{\"origin\" : {\"name\" : \"A City\"}, " +
                        "\"destination\" : {\"name\" : \"B City\"}}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");
		mockMvc.perform(delete(location)).andExpect(status().isNoContent());

		mockMvc.perform(get(location)).andExpect(status().isNotFound());
	}
}
