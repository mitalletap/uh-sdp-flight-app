import React, { Component } from "react";
import Logo from "../images/logo.png";
import {
  SelectPicker,
  DateRangePicker,
  Content,
  InputNumber,
  InputGroup,
  Icon,
  AutoComplete,
  Button,
  Panel,
  PanelGroup,
  Toggle,
  InputPicker
} from "rsuite";
import dataSet from "../data/data";
import airportData from "../data/airports";

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
        isOneWay: props
      },
      () => {
        console.log("Current Value: " + this.state.isOneWay);
      }
    );
  };

  handleOrigin = props => {
    this.setState(
      {
        origin: props
      },
      () => {
        console.log("Current Value: " + this.state.origin);
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
  render() {
    const data = ["Hello", "Hi"];
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
                data={airportData}
                onChange={this.handleOrigin}
              />
              <InputGroup.Addon>to</InputGroup.Addon>
              <InputPicker
                placeholder="Arrive In"
                data={airportData}
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
                onChange={this.hasChanged}
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

{
  /* <InputGroup
    inside
    style={{ width: 305, marginBottom: 10, paddingRight: "5px"}}
>
    <AutoComplete data={airportData} placeholder="Depart From" />
    <InputGroup.Addon>
    <Icon icon="plane" />
    </InputGroup.Addon>
</InputGroup>
<InputGroup
    inside
    style={{ width: 305, marginBottom: 10, paddingLeft: "5px" }}
>
    <AutoComplete data={airportData} placeholder="Arrive In" />
    <InputGroup.Addon>
    <Icon icon="plane" rotate={90} />
    </InputGroup.Addon>
</InputGroup> */
}
