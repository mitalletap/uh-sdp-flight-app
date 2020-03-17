// Get link extension and add it to state/props
import React, { Component } from "react";
import CardDisp from "../components/CardDisp";
import { Button } from "antd";
// import { Skeleton, Switch, Card, Avatar } from "antd";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined
// } from "@ant-design/icons";
import { Card } from "antd";
//const { Meta } = Card;

class DataTable extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      depDate: this.props.title,
      arrDate: "",
      RT: null,
      ori: "",
      des: "",
      flights: [],
      response: "",
      responseType: "error",
      isLoaded: false
    };
  }

  componentDidMount() {
    const URI =
      "http://localhost:8080/api/get-flights?origin=" +
      this.state.ori +
      "&destination=" +
      this.state.des +
      "&outboundDate=" +
      this.state.depDate +
      "&inboundDate=" +
      this.state.arrDate;
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

  alert() {
    console.log(this.props);
    console.log(this.state);
  }

  render() {
    let { isLoaded, flights, responseType, depDate } = this.state;
    if (!isLoaded && responseType != "success") {
      return (
        <React.Fragment>
          <div style={{ paddingTop: "100px" }}>
            <Card
              size="small"
              style={{
                width: "50%",
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                paddingTop: "25px",
                left: "50%"
              }}
              loading={!isLoaded}
            />
          </div>
          <div style={{ paddingTop: "25px" }}>
            <Card
              size="small"
              style={{
                width: "50%",
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                paddingTop: "25px",
                left: "50%"
              }}
              loading={!isLoaded}
            />
          </div>
          <div style={{ paddingTop: "25px" }}>
            <Card
              size="small"
              style={{
                width: "50%",
                top: "50%",
                transform: "translateX(-50%) translateY(-50%)",
                paddingTop: "25px",
                left: "50%"
              }}
              loading={!isLoaded}
            />
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <div style={{ paddingTop: "100px" }}>
          <h1> {this.props.title} </h1>
          {/* {flights.map(flight => (
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
            
          ))} */}
          <Button onClick={() => this.alert()}>Hello</Button>
        </div>
      );
    }
  }
}

export default DataTable;
