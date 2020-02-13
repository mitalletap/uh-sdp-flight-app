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

	@BeforeEach
	public void clearLeftoverDataBeforeTest() throws Exception {
		flightDao.deleteAll();
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

		mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated()).andExpect(
				header().string("Location", containsString("flights/")));
	}

	@Test
	public void shouldRetrieveEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");
		mockMvc.perform(get(location)).andExpect(status().isOk()).andExpect(
				jsonPath("$.originName").value("A City")).andExpect(
				jsonPath("$.destinationName").value("B City"));
	}

	@Test
	public void shouldQueryEntity() throws Exception {

		mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated());

		mockMvc.perform(
				get("/flights/search/findByOriginName?name={name}", "A City")).andExpect(
				status().isOk()).andExpect(
				jsonPath("$._embedded.flights[0].destinationName").value(
						"B City"));
	}

	@Test
	public void shouldUpdateEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");

		mockMvc.perform(put(location).content(
				"{\"originName\": \"C City\", \"destinationName\":\"Z Town\"}")).andExpect(
				status().isNoContent());

		mockMvc.perform(get(location)).andExpect(status().isOk()).andExpect(
				jsonPath("$.originName").value("C City")).andExpect(
				jsonPath("$.destinationName").value("Z Town"));
	}

	@Test
	public void shouldPartiallyUpdateEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");

		mockMvc.perform(
				patch(location).content("{\"originName\": \"Alpha City\"}")).andExpect(
				status().isNoContent());

		mockMvc.perform(get(location)).andExpect(status().isOk()).andExpect(
				jsonPath("$.originName").value("Alpha City")).andExpect(
				jsonPath("$.destinationName").value("B City"));
	}

	@Test
	public void shouldDeleteEntity() throws Exception {

		MvcResult mvcResult = mockMvc.perform(post("/flights").content(
				"{\"originName\": \"A City\", \"destinationName\":\"B City\"}")).andExpect(
				status().isCreated()).andReturn();

		String location = mvcResult.getResponse().getHeader("Location");
		mockMvc.perform(delete(location)).andExpect(status().isNoContent());

		mockMvc.perform(get(location)).andExpect(status().isNotFound());
	}
}
