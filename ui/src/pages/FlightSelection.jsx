import React from "react";
import FlightSearch from "../components/FlightSearch";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Home = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavigationBar />
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
