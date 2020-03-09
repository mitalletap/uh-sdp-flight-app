import React from "react";
import CardDisp from "../components/CardDisp";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";
import FlightService from "../components/FlightService";

const Card = () => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <FlightService></FlightService>
          <CardDisp />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Card;
