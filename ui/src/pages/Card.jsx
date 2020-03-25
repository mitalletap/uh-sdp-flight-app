import React from "react";
import CardDisp from "../components/CardDisp";
import { Container, Footer, Content } from "rsuite";

const Card = () => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <CardDisp />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Card;
