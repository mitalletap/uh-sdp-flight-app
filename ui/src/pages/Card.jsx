import React from "react";
import FlightSearch from "../components/FlightSearch";

import CardDisp from "../components/CardDisp";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content } from "rsuite";

const Card = () => {
  return (
    <React.Fragment>
      <Container>
        {/* <Header>
          <NavigationBar />
        </Header> */}
        <Content>
          <CardDisp />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Card;
