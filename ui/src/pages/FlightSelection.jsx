import React from "react";
import FlightSearch from "../components/FlightSearch";
import NavBar from "../components/NavBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavBar />
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
