import React from "react";
import Planner from "../components/Planner";
import { Container, Content } from "rsuite";

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
