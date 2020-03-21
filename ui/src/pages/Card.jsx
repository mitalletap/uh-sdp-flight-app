import React from "react";
import CardDisp from "../components/CardDisp";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";
import FlightService from "../components/FlightService";
import ReserveFlightService from "../components/ReserveFlightService";

const Card = () => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <FlightService />
          <CardDisp />
          <ReserveFlightService />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Card;
