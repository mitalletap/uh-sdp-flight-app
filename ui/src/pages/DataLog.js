import React from "react";
import DataTable from "../components/DataTable";
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
          <DataTable />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Home;
