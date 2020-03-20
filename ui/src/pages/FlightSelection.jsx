import React, { Component } from "react";
import FlightSearch from "../components/FlightSearch";
import NavBar from "../components/NavBar";
import { Container, Header, Footer, Content } from "rsuite";
import { withRouter } from "react-router-dom";

const FlightSelection = props => {
  return (
    <React.Fragment>
      <Container>
        {/* <Header>
          <NavBar />
        </Header> */}
        <Content>
          <FlightSearch {...props} />
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default withRouter(FlightSelection);

// class FlightSelection extends Component {
//   state = {}
//   componentDidMount() {
//     this.props.history.push('/');
//     console.log(this.props.history);
//   }

//   render() {
//     return (

//       <React.Fragment>
//         <Container>
//           <Header>
//             <NavBar />
//           </Header>
//           <Content>
//             <FlightSearch />
//           </Content>
//           <Footer></Footer>
//         </Container>
//       </React.Fragment>

//      );
//   }
// }

// export default FlightSelection;
