import React from "react";
import DataTable from "../components/DataTable";
import NavigationBar from "../components/NavigationBar";
import { Container, Header, Footer, Content, Toggle } from "rsuite";

const Data = () => {
  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavigationBar />
        </Header>
        <Content>
          <DataTable />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Data;
