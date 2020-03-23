import React, { Component } from "react";
import FlightSearch from "../components/FlightSearch";
import NavBar from "../components/NavBar";
import { Container, Header, Footer, Content } from "rsuite";
import { withRouter } from "react-router-dom";

const FlightSelection = props => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <FlightSearch {...props} />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(FlightSelection);
