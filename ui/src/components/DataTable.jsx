// // Get link extension and add it to state/props
// import React, { Component } from "react";
// import CardDisp from "./CardDisp";
// import { Button } from "antd";
// import { Card } from "antd";

// import { withRouter } from "react-router-dom";

// class DataTable extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       depDate: this.props.qDD,
//       arrDate: this.props.qAD,
//       RT: this.props.qRT,
//       ori: this.props.qOC,
//       des: this.props.qDC,
//       flights: [],
//       response: "",
//       responseType: "error",
//       isLoaded: false
//     };
//   }

//   componentDidMount() {
//     window.onpopstate = this.onBackButtonEvent;
//     const URI =
//       "http://localhost:8080/api/get-flights?origin=" +
//       this.state.ori +
//       "&destination=" +
//       this.state.des +
//       "&outboundDate=" +
//       this.state.depDate +
//       "&inboundDate=" +
//       this.state.arrDate;
//     //const URL = "http://localhost:8080/api/get-flights?origin=SFO&destination=ATL&outboundDate=2020-03-20&inboundDate=2020-03-25";
//     const URL =
//       "http://localhost:8080/api/get-flights?origin=SFO&destination=ATL&outboundDate=anytime"; //&inboundDate=anytime

//     fetch(URI)
//       .then(res => {
//         if (!res.ok) {
//           console.log("Error!~");
//         }
//         return res.json();
//       })
//       .then(data => {
//         this.setState({
//           isLoaded: true,
//           flights: data
//         });
//       });
//   }

//   render() {
//     let { isLoaded, flights, responseType, depDate } = this.state;
//     if (!isLoaded && responseType != "success") {
//       return (
//         <React.Fragment>
//           <div style={{ paddingTop: "100px" }}>
//             <Card
//               size="small"
//               style={{
//                 width: "50%",
//                 top: "50%",
//                 transform: "translateX(-50%) translateY(-50%)",
//                 paddingTop: "25px",
//                 left: "50%"
//               }}
//               loading={!isLoaded}
//             />
//           </div>
//           <div style={{ paddingTop: "25px" }}>
//             <Card
//               size="small"
//               style={{
//                 width: "50%",
//                 top: "50%",
//                 transform: "translateX(-50%) translateY(-50%)",
//                 paddingTop: "25px",
//                 left: "50%"
//               }}
//               loading={!isLoaded}
//             />
//           </div>
//           <div style={{ paddingTop: "25px" }}>
//             <Card
//               size="small"
//               style={{
//                 width: "50%",
//                 top: "50%",
//                 transform: "translateX(-50%) translateY(-50%)",
//                 paddingTop: "25px",
//                 left: "50%"
//               }}
//               loading={!isLoaded}
//             />
//           </div>
//         </React.Fragment>
//       );
//     } else {
//       return (
//         <div style={{ paddingTop: "100px" }}>
//           {/* <h1> {this.props.title} </h1> */}
//           <CardDisp
//             price={flights.price}
//             key={flights[0].outboundCarrier.CarrierId}
//             departDate={flights[0].outboundDepartureDate}
//             arriveDate={flights[0].inboundDepartureDate}
//             isDirect={flights[0].direct}
//             origin={flights[0].origin.Name}
//             originCity={flights[0].origin.CityName}
//             originCode={flights[0].origin.SkyscannerCode}
//             destination={flights[0].destination}
//             destinationCity={flights[0].destination.CityName}
//             destinationCode={flights[0].destination.SkyscannerCode}
//           />
//           <Button onClick={() => this.alert()}>Hello</Button>
//         </div>
//       );
//     }
//   }
// }

// export default DataTable;
