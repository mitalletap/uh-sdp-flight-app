import React, { useState, useEffect, Component } from "react";
import { map } from "react-bootstrap/cjs/ElementChildren";

function FlightService() {
  const [flights, setFlights] = useState(null);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    const fetchData = async () => {
      const response = await fetch(
        "http://localhost:8080/api/get-reserved-flights"
      );
      const data = await response.json();
      const [item] = data;
      setFlights(item);
    };
    fetchData();
  }, []);

  return (
    <div>
      {flights && <div>{flights.id}</div>}
      {flights && <div>{flights.userName}</div>}
    </div>
  );
}

export default FlightService;
