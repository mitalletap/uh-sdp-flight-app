import React, { useState, useEffect, Component } from "react";
import { map } from "react-bootstrap/cjs/ElementChildren";

class FlightService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/api/get-reserved-flights")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          flights: json
        });
      });
  }

  render() {
    let { isLoaded, flights } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <ul>
            {flights.map(flight => (
              <li key={flight.id}>
                userName: {flight.userName} | direct: {flight.direct} | price:{" "}
                {flight.price} | departureDate: {flight.departureDate}
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default FlightService;
/*
        <div>
            {flights && <div>{flights.map((flight) => {
                <div>{flight.userName}</div>
            })}</div>}
        </div>*/
