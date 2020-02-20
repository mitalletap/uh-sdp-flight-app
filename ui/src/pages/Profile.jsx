import React, { Component } from "react";
import NavigationBar from "../components/NavigationBar";
import FlightSearch from "../components/FlightSearch";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Profile = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavigationBar />
        </Header>
        <Content>
          <h1> Welcome to your profile </h1>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
