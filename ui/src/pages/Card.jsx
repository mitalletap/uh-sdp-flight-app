import React from "react";
import { Container, Footer, Content } from "rsuite";
import CardDisp from "../components/CardDisp";

const Card = () => (
  <React.Fragment>
    <Container>
      <Content>
        <CardDisp />
      </Content>
      <Footer />
    </Container>
  </React.Fragment>
);

export default Card;
