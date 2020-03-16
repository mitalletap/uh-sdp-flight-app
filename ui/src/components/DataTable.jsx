import React, { Component } from "react";
import CardDisp from "../components/CardDisp";
class DataTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const URL =
      "http://localhost:8080/api/get-flights?origin=SFO&destination=ATL&outboundDate=2020-03-20&inboundDate=2020-03-25";
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({
          isLoaded: true,
          flights: data
        });
      });
  }

  render() {
    let { isLoaded, flights } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div style={{ paddingTop: "100px" }}>
          {flights.map(flight => (
            <React.Fragment>
              <div style={{ paddingTop: "25px" }}>
                <CardDisp
                  price={flight.price}
                  key={flight.outboundCarrier.CarrierId}
                  departDate={flight.outboundDepartureDate}
                  arriveDate={flight.inboundDepartureDate}
                  isDirect={flight.direct}
                  origin={flight.origin.Name}
                  originCity={flight.origin.CityName}
                  originCode={flight.origin.SkyscannerCode}
                  destination={flight.destination}
                  destinationCity={flight.destination.CityName}
                  destinationCode={flight.destination.SkyscannerCode}
                />
              </div>
            </React.Fragment>
          ))}
        </div>
      );
    }
  }
}

export default DataTable;

// if (!isLoaded) {
//   return <div>Loading...</div>;
// } else {
//   return (
//     <div>
//       <ul>{flights.map(flight => (
//         <CardDisp
//           price={flight.price}
//           id={flight.id}
//           departDate={flight.departDate}
//           arriveDate={flight.arriveDate}
//           isDirect={flight.direct}
//           origin={flight.origin}
//           originCity={flight.originCity}
//           originCountry={flight.originCountry}
//           originCode={flight.originCode}
//           destination={flight.destination}
//           destinationCity={flight.destinationCity}
//           destinationCountry={flight.destinationCountry}
//           destinationCode={flight.destinationCode}
//         />
//       ))}
//       </ul>
//     </div>
//   );
// }

// <CardDisp
// price={this.state.price}
// id={this.state.transID}
// departDate={this.state.departDate}
// arriveDate={this.state.arriveDate}
// isDirect={this.state.isDirect}
// origin={this.state.origin}
// originCity={this.state.originCity}
// originCountry={this.state.originCountry}
// originCode={this.state.originCode}
// destination={this.state.destination}
// destinationCity={this.state.destinationCity}
// destinationCountry={this.state.destinationCountry}
// destinationCode={this.state.destinationCode}
// />

// import React, { Component } from "react";
// import CardDisp from '../components/CardDisp';
// import axios from 'axios'
// class DataTable extends Component {
//   constructor(props) {
//     super(props);
//     const JSON = [];
//     this.state = {
//       transID: null,
//       departDate: "",
//       arriveDate: "",
//       isDirect: "false",
//       origin: "",
//       originCity: "",
//       originCountry: "",
//       originCode: "",
//       destination: "",
//       destinationCity: "",
//       destinationCountry: "",
//       destinationCode: ""
//     };
//   }

//   componentDidMount() {
//     const URL = 'http://localhost:8080/api/get-flights?origin=SFO&destination=ATL&outboundDate=2020-03-20&inboundDate=2020-03-25';
//     var length = 0;
//     fetch(URL)
//       .then(res => res.json())
//       .then((data) => {
//         this.setState({
//           transID: data[0].id,
//           isDirect: data[0].direct,
//           price: data[0].price,
//           departDate: data[0].outboundDepartureDate,
//           arriveDate: data[0].inboundDepartureDate,
//           origin: data[0].origin.Name,
//           originCity: data[0].origin.CityName,
//           originCountry: data[0].origin.CountryName,
//           originCode: data[0].origin.SkyscannerCode,
//           destination: data[0].destination.Name,
//           destinationCity: data[0].destination.CityName,
//           destinationCountry: data[0].destination.CountryName,
//           destinationCode: data[0].destination.SkyscannerCode
//         })
//       })
//   }

//   render() {
//     return (
//       <div>
//         <CardDisp
//           price={this.state.price}
//           id={this.state.transID}
//           departDate={this.state.departDate}
//           arriveDate={this.state.arriveDate}
//           isDirect={this.state.isDirect}
//           origin={this.state.origin}
//           originCity={this.state.originCity}
//           originCountry={this.state.originCountry}
//           originCode={this.state.originCode}
//           destination={this.state.destination}
//           destinationCity={this.state.destinationCity}
//           destinationCountry={this.state.destinationCountry}
//           destinationCode={this.state.destinationCode}
//         />

//       </div>
//     );
//   }
// }

// export default DataTable;
