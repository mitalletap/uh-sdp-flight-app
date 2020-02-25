import React from "react";
import CardDisp from "../components/CardDisp";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

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
