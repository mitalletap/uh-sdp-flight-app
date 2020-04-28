import React from "react";
import { Container, Footer, Content } from "rsuite";
import FlightSearch from "../components/FlightSearch";

const FlightSelection = props => (
  <React.Fragment>
    <Container>
      <Content>
        <FlightSearch {...props} />
      </Content>
      <Footer />
    </Container>
  </React.Fragment>
);

export default FlightSelection;
