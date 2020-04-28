import React, { Component } from "react";
import { Auth } from "aws-amplify";
import moment from "moment";
import { Result, Select, Switch, Button } from "antd";
import MyCard from "./DataCard";

const { Option } = Select;

class Planner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: null,
      data: [],
      received: null,
      filterOption: null,
      ascending: true
    };
  }

  componentDidMount() {
    Auth.currentAuthenticatedUser().then(data => {
      this.setState({
        userName: data.attributes.email
      });
    });
    setTimeout(() => {
      this.getPlanner(URL);
    }, 1000);
  }

  deleteFromPlanner = flights => {
    const { data } = this.state;
    fetch(
      `http://localhost:8080/api/delete-reserved-flight?flightId=${flights.id}`,
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json" }
      }
    );

    for (var i = 0; i < data.length; i++) {
      var temp = this.state.data;
      if (temp[i].id === flights.id && temp[i] !== null) {
        temp.splice(i, 1);
      }
    }

    this.setState({ data: temp });
  };

  getPlanner() {
    const { userName, data } = this.state;
    const URL =
      "http://localhost:8080/api/get-users-reserved-flights?userName=";
    const link = URL + userName;
    setTimeout(() => {
      fetch(link)
        .then(response => response.json())
        .then(jsonData => {
          this.setState({
            data: jsonData,
            received: jsonData.length > 0
          });
        });
    }, 1000);
  }

  render() {
    const { data, received } = this.state;
    console.log(data);
    if (data.length !== 0) {
      return (
        <React.Fragment style={{ backgroundColor: "black" }}>
          <h1 style={{ textAlign: "center", paddingBottom: "100px" }}>
            {this.state.data.length !== 0
              ? `You have ${this.state.data.length} flights currently saved to your Planner!`
              : ""}
          </h1>
          <div
            className="cardMapContainer"
            style={{
              width: "700px",
              left: "0vw",
              top: "30vh",
              transform: `translate(35vw, 0%)`
            }}
          >
            {data.map(flights => (
              <React.Fragment>
                <div>
                  <Button
                    type="primary"
                    danger
                    onClick={() => this.deleteFromPlanner(flights)}
                    style={{ height: "100px", width: "100px" }}
                  >
                    {" "}
                    Delete This <br /> Flight{" "}
                  </Button>
                </div>
                <ul className="listitems" key={flights.id}>
                  <div style={{}}>
                    <MyCard
                      className="realCard"
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
                      id={flights.id}
                      purchased={flights.purchased}
                      active
                    />
                  </div>
                </ul>
              </React.Fragment>
            ))}
          </div>
        </React.Fragment>
      );
    }
    if (data.length === 0 && received === null) {
      return (
        <React.Fragment>
          <div>
            <div className="emptyCardList" style={{ paddingTop: "100px" }}>
              <ul style={{ paddingBottom: "50px" }}>
                <MyCard className="placeholdCard" skeleton />
              </ul>
              <ul style={{ paddingBottom: "50px" }}>
                <MyCard className="placeholdCard" skeleton />
              </ul>
              <ul style={{ paddingBottom: "50px" }}>
                <MyCard className="placeholdCard" skeleton />
              </ul>
            </div>
          </div>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "white" }}>
          <Result title="No Saved Flights" />
        </div>
      </React.Fragment>
    );
  }
}

export default Planner;
