import React, { useState, Component } from "react";
import NavBar from "../components/NavBar";
import Planner from "../components/Planner";
import { Container, Header, Footer, Content } from "rsuite";
import { Calendar, Badge } from "antd";

const Data = props => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <Planner />
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Data;
