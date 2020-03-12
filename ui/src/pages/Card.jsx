import React from "react";
import FlightSearch from "../components/FlightSearch";

import CardDisp from "../components/CardDisp";
import NavBar from "../components/NavBar";
import { Container, Header, Footer, Content } from "rsuite";

const Card = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavBar />
        </Header>
        <Content>
          <CardDisp />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Card;
