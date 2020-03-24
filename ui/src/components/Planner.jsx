import React, { Component } from "react";
import { Auth } from "aws-amplify";
import MyCard from "./DataCard";
import moment from "moment";
// localhost:8080/api/get-users-reserved-flights?userName=NEMO
class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      data: []
    };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser()
      .then(data => {
        this.setState({
          userName: data.attributes.email
        });
      })
      .catch(err => console.log(err));

    this.getPlanner();
  }

  getPlanner() {
    setTimeout(() => {
      const URL =
        "http://localhost:8080/api/get-users-reserved-flights?userName=" +
        this.state.userName;
      fetch(URL)
        .then(response => response.json())
        .then(jsonData => {
          this.setState({
            data: jsonData
          });
        })
        .catch(error => {
          console.error(error);
        });
    }, 1000);
  }

  render() {
    if (this.state.data[0] == null) {
      return (
        <React.Fragment>
          <div style={{ paddingTop: "100px" }}>
            <ul style={{ paddingBottom: "50px" }}>
              <MyCard skeleton={true} />
            </ul>
            <ul style={{ paddingBottom: "50px" }}>
              <MyCard skeleton={true} />
            </ul>
            <ul style={{ paddingBottom: "50px" }}>
              <MyCard skeleton={true} />
            </ul>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <div style={{ paddingTop: "100px" }}>
            {this.state.data.map(flights => (
              <ul key={flights.id} style={{ paddingBottom: "50px" }}>
                <MyCard
                  title={
                    flights.inboundDepartureDate === ""
                      ? `${flights.origin.originCityName} to ${
                          flights.destination.destinationCityName
                        } on ${moment(
                          flights.outboundDepartureDate,
                          "YYYY-MM-DD"
                        ).format("MMM Do YYYY")}`
                      : `${flights.origin.originCityName} to ${
                          flights.destination.destinationCityName
                        } from ${moment(
                          flights.outboundDepartureDate,
                          "YYYY-MM-DD"
                        ).format("MMM Do YYYY")} to ${moment(
                          flights.inboundDepartureDate,
                          "YYYY-MM-DD"
                        ).format("MMM Do YYYY")}`
                  }
                  originCode={flights.origin.originIataCode}
                  destinationCode={flights.destination.destinationIataCode}
                  price={flights.price}
                  outboundCarrier={flights.outboundCarrier.name}
                />
              </ul>
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default Planner;
