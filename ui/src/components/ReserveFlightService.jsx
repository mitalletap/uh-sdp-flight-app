import React, { Component } from "react";
class ReserveFlightService extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flights: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        direct: true,
        userName: "NemoTheHero",
        price: 323,
        carrierIds: [851],
        outboundDepartureDate: "2020/02/20",
        inboundDepartureDate: "2020/03/20",
        origin: {
          originId: 81727,
          originIataCode: "SFO",
          originName: "San Francisco International",
          originCityName: "San Francisco",
          originCityId: "SFOA"
        },
        destination: {
          destinationId: 60987,
          destinationIataCode: "JFK",
          destinationName: "New York John F. Kennedy",
          destinationCityName: "New York",
          destinationCityId: "NYCA"
        },
        outboundCarrier: {
          carrierId: 521,
          name: "Swoosh Lanes"
        },
        inboundCarrier: {
          carrierId: 792,
          name: "Fast Landings"
        }
      })
    };

    fetch("http://localhost:8080/api/post-reserved-flight", requestOptions)
      .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
          // get error message from body or default to response status
          const error = (data && data.message) || response.status;
          return Promise.reject(error);
        }

        this.setState({ postId: data.id });
      })
      .catch(error => {
        this.setState({ errorMessage: error });
        console.error("There was an error!", error);
      });
  }
  render() {
    return <div> ReserveFlightService</div>;
  }
}
export default ReserveFlightService;
