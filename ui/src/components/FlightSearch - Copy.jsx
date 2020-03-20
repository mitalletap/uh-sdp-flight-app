import React, { Component } from "react";
import Logo from "../images/logo.png";
import airportData from "../data/airportsJS";
import "rsuite/dist/styles/rsuite-default.css";
import "antd/dist/antd.css";
import moment from "moment";
import { createBrowserHistory } from "history";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import {
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Select,
  //Alert,
  message
} from "antd";
import DataTable from "../components/DataTable";

const history = createBrowserHistory();
const location = history.location;

const airport = JSON.parse(JSON.stringify(airportData));
const { RangePicker } = DatePicker;
const { Option } = Select;

class FlightSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfPassengers: 1,
      departDate: "",
      arriveDate: "",
      isRoundTrip: "false",
      origin: "",
      originState: "",
      originCity: "",
      originCountry: "",
      originCode: "",
      destination: "",
      destinationState: "",
      destinationCity: "",
      destinationCountry: "",
      destinationCode: "",
      status: false
    };
  }

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
    // Create IF ELSE statement to check if values are equal to null
    this.setState(
      {
        departDate: props[0].format("YYYY-MM-DD"),
        arriveDate: props[1].format("YYYY-MM-DD")
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
  handleStart = props => {
    // Create IF ELSE statement to check if values are equal to null
    this.setState(
      {
        departDate: props.format("YYYY-MM-DD")
      },
      () => {
        console.log("Current Value: " + this.state.departDate);
      }
    );
  };
  handleEnd = props => {
    // Create IF ELSE statement to check if values are equal to null
    this.setState(
      {
        arriveDate: props.format("YYYY-MM-DD")
      },
      () => {
        console.log("Current Value: " + this.state.arriveDate);
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
  handleOrigin = (...props) => {
    this.setState(
      {
        origin: props[1].airport,
        originCity: props[1].city,
        originState: props[1].state,
        originCountry: props[1].country,
        originCode: props[1].key
      },
      () => {
        console.log(
          `Logged ${props[0]} located in ${props[1].city}, ${props[1].state}, ${props[1].country} with code ${props[1].key}`
        );
      }
    );
  };
  handleDestination = (...props) => {
    this.setState(
      {
        destination: props[1].airport,
        destinationCity: props[1].city,
        destinationState: props[1].state,
        destinationCountry: props[1].country,
        destinationCode: props[1].key
      },
      () => {
        console.log(
          `Logged ${props[0]} located in ${props[1].city}, ${props[1].state}, ${props[1].country} with code ${props[1].key}`
        );
      }
    );
  };
  redirect = path => {
    history.push(path);
  };

  render() {
    var stateObject = this.state;
    function disabledDate(current) {
      return current && current < moment().endOf("day");
    }
    function checkCompleteData(props) {
      var dataComplete =
        props.departDate !== "" &&
        props.destination !== "" &&
        props.origin !== "";
      var oneWay = props.departDate === "" && props.isRoundTrip === false;
      if (dataComplete === true && oneWay !== true) {
        message.success("Thank you. Please wait");
        props.status = true;
      } else {
        message.warning("Please complete all fields to proceed");
      }
      return props.status === true;
    }

    return this.state.status === true ? (
      <DataTable
        qDD={this.state.departDate}
        qAD={this.state.arriveDate}
        qRT={this.state.isRoundTrip}
        qOC={this.state.originCode}
        qDC={this.state.destinationCode}
      />
    ) : (
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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Select
            showSearch
            placeholder={"Depart From"}
            style={{ width: 400 }}
            onChange={this.handleOrigin}
          >
            {airport.map(data => {
              return data.country === "United States" &&
                data.name !== "" &&
                data.type === "Airports" ? (
                <Option
                  key={data.code}
                  value={data.label}
                  airport={data.name}
                  city={data.label}
                  state={data.state}
                  country={data.country}
                >
                  {" "}
                  <strong>
                    {data.label}, {data.state}
                  </strong>{" "}
                  <br /> {data.name}{" "}
                </Option>
              ) : (
                console.log()
              );
            })}
          </Select>
          <Select
            showSearch
            placeholder={"Arrive In"}
            style={{ width: 400 }}
            onChange={this.handleDestination}
          >
            {airport.map(data => {
              return data.country === "United States" &&
                data.name !== "" &&
                data.type === "Airports" ? (
                <Option
                  key={data.code}
                  value={data.label}
                  airport={data.name}
                  city={data.label}
                  state={data.state}
                  country={data.country}
                >
                  {" "}
                  <strong>
                    {data.label}, {data.state}
                  </strong>{" "}
                  <br /> {data.name}{" "}
                </Option>
              ) : (
                console.log()
              );
            })}
          </Select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh"
          }}
        >
          <div style={{ paddingRight: "10px" }}>
            {this.state.isRoundTrip === true ? (
              <RangePicker
                placeholder={["Start", "End"]}
                disabledDate={disabledDate}
                format="YYYY-MM-DD"
                allowEmpty={(false, true)}
                onChange={this.handleDate}
                style={{ width: 280, paddingRight: "10px" }}
              />
            ) : (
              <DatePicker
                placeholder={"Start"}
                disabledDate={disabledDate}
                format="YYYY-MM-DD"
                allowEmpty={false}
                onChange={this.handleStart}
              />
            )}
          </div>
          <div style={{ width: 100, paddingRight: "10px" }}>
            <InputNumber
              defaultValue={1}
              max={10}
              min={1}
              onChange={this.handleNumOfPassengers}
            />
          </div>
          <div style={{ paddingRight: "10px" }}>
            <Switch
              size="default"
              checkedChildren="RT"
              unCheckedChildren="OW"
              onChange={this.handleisOneWay}
            />
          </div>
          <div style={{ paddingRight: "10px" }}>
            <Button
              style={{ marginRight: "10px" }}
              type="primary"
              onMouseDown={() => {
                var complete = checkCompleteData(this.state);
                if (complete === true) {
                  this.setState({
                    status: true
                  });
                }
                this.redirect(this.state.status === true ? "/data" : "");
              }}
            >
              Find Flights
            </Button>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default FlightSearch;
