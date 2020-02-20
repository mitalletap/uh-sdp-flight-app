import React, { Component } from "react";
import Logo from "../images/logo.png";
import {
  DateRangePicker,
  Content,
  Input,
  InputNumber,
  Button,
  Toggle,
  InputGroup,
  Icon,
  InputPicker
} from "rsuite";
import airportData from "../data/airports.js";
import testData from "../data/data";

class FlightSearch extends Component {
  state = {
    numOfPassengers: 1,
    departDate: "",
    arriveDate: "",
    isRoundTrip: "false",
    origin: "",
    destination: ""
  };

  handleNumOfPassengers = props => {
    this.setState(
      {
        numOfPassengers: props
      },
      () => {
        console.log("Current Value: " + this.state.numOfPassengers);
      }
    );
  };

  handleDate = props => {
    this.setState(
      {
        departDate: props[0],
        arriveDate: props[1]
      },
      () => {
        console.log(
          "Current Value: " +
            this.state.departDate +
            " and " +
            this.state.arriveDate
        );
      }
    );
  };

  handleisOneWay = props => {
    this.setState(
      {
        isRoundTrip: props
      },
      () => {
        console.log("Current Value: " + this.state.isRoundTrip);
      }
    );
  };

  handleOrigin = props => {
    this.setState(
      {
        origin: props
      },
      () => {
        console.log(props);
      }
    );
  };

  handleDestination = props => {
    this.setState(
      {
        destination: props
      },
      () => {
        console.log("Current Value: " + this.state.destination);
      }
    );
  };

  handleSearch = props => {
    this.setState({}, () => {
      console.log(this.state);
    });
  };

  render() {
    const { beforeToday } = DateRangePicker;
    return (
      <React.Fragment>
        <img
          src={Logo}
          style={{
            height: "50vh",
            textAlign: "center",
            display: "block",
            justifyContent: "center",
            alignItems: "center",
            margin: "auto"
          }}
        />

        {/* Top Div is for Depart and Arrival City Selection */}
        <div style={{ paddingTop: "50px" }}>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <InputGroup
              style={{
                width: "35vh"
              }}
            >
              <InputPicker
                placeholder="Depart From"
                data={testData}
                value={this.state.value}
                onChange={this.handleOrigin}
              />
              <InputGroup.Addon>to</InputGroup.Addon>
              <InputPicker
                placeholder="Arrive In"
                data={testData}
                value={this.state.value}
                onChange={this.handleDestination}
              />
            </InputGroup>
          </Content>
        </div>

        {/* Bottom Div is for Passenger, Date, and Round Trip Selection */}
        <div style={{ paddingTop: "50px" }}>
          <Content
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ width: 85, paddingRight: "10px" }}>
              <InputNumber
                defaultValue={1}
                max={10}
                min={1}
                onChange={this.handleNumOfPassengers}
              />
            </div>
            <DateRangePicker
              style={{ paddingRight: "10px" }}
              disabledDate={beforeToday()}
              onChange={this.handleDate}
            />
            <div style={{ paddingRight: "10px" }}>
              <Toggle
                size="lg"
                checkedChildren="RT"
                unCheckedChildren="OW"
                onChange={this.handleisOneWay}
              />
            </div>
            <div style={{ paddingRight: "10px" }}>
              <Button
                style={{ marginRight: "10px" }}
                appearance="default"
                onClick={this.handleSearch}
              >
                Find Flights
              </Button>
            </div>
          </Content>
        </div>
      </React.Fragment>
    );
  }
}

export default FlightSearch;
