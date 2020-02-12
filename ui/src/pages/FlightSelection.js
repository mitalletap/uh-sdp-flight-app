import React from "react";
import FlightSearch from "../components/FlightSearch";
import Nav from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <Nav />
        </Header>
        <Content>
          <FlightSearch />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
