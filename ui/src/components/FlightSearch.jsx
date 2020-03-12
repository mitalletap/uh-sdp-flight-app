import React, { Component } from "react";
import Logo from "../images/logo.png";
import "rsuite/dist/styles/rsuite-default.css";
import "antd/dist/antd.css";
import moment from "moment";
import { DatePicker, InputNumber, Switch, Button, Select } from "antd";

const testData = [
  "Houston",
  "Dallas",
  "Austin",
  "San Antonio",
  "Fort Worth",
  "Arlington",
  "Galveston",
  "El Paso"
];
const { RangePicker } = DatePicker;
const { Option } = Select;
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
    if (
      this.state.arriveDate == "" ||
      this.state.departDate == "" ||
      this.state.destination == "" ||
      this.state.origin == ""
    ) {
      console.log("Please Enter All Fields!");
    } else {
      console.log(this.state);
    }
  };

  render() {
    function disabledDate(current) {
      // Can not select days before today and today
      return current && current < moment().endOf("day");
    }

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
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Select
            placeholder={"Depart From"}
            style={{ width: 120 }}
            onChange={this.handleOrigin}
          >
            {testData.map(data => (
              <Option key={data}>{data}</Option>
            ))}
          </Select>
          <Select
            placeholder={"Arrive In"}
            style={{ width: 120 }}
            onChange={this.handleDestination}
          >
            {testData.map(data => (
              <Option key={data}>{data}</Option>
            ))}
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
          <div style={{ width: 200, paddingRight: "10px" }}>
            <RangePicker
              placeholder={["Start", "End"]}
              disabledDate={disabledDate}
              format="YYYY-MM-DD"
              allowEmpty={(false, true)}
              onChange={this.handleDate}
            />
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
              onClick={this.handleSearch}
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

/*


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
                preventOverflow={true}
              />
              <InputGroup.Addon>to</InputGroup.Addon>
              <InputPicker
                placeholder="Arrive In"
                data={testData}
                value={this.state.value}
                onChange={this.handleDestination}
                preventOverflow={true}
              />
            </InputGroup>
          </Content>
        </div>

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
              preventOverflow={true}
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
        
        */
