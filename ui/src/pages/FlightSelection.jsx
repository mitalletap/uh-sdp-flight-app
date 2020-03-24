import React from "react";
import FlightSearch from "../components/FlightSearch";
import { Container, Footer, Content } from "rsuite";
import { withRouter } from "react-router-dom";

const FlightSelection = props => {
  return (
    <React.Fragment>
      <Container>
        <Content>
          <FlightSearch {...props} />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(FlightSelection);
