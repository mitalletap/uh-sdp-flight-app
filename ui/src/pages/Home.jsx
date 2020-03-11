import React, { Component } from "react";
import FlightSearch from "../components/FlightSearch";
import { Container, Header, Content } from "rsuite";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavBar />
        </Header>
        <Content>
          <h1> Welcome to Takeoff </h1>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Home;
