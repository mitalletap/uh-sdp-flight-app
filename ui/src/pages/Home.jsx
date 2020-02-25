import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import FlightSearch from "../components/FlightSearch";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavigationBar />
        </Header>
        <Content>
          <h1> Welcome to Takeoff </h1>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Home;
