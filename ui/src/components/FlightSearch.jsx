import React, { Component } from "react";
import Logo from "../images/logo.png";
import airportData from "../data/airportsJS";
import "antd/dist/antd.css";
import moment from "moment";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import {
  DatePicker,
  InputNumber,
  Switch,
  Button,
  Select,
  Modal,
  Descriptions,
  message,
  notification,
  Typography,
  Result
} from "antd";
import { Auth } from "aws-amplify";
import { SmileOutlined } from "@ant-design/icons";

const history = createBrowserHistory();
const location = history.location;
const airport = JSON.parse(JSON.stringify(airportData));
const { Text } = Typography;
const { RangePicker } = DatePicker;
const { Option } = Select;
class FlightSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      API: false,
      userName: "",
      numOfPassengers: 1,
      departDate: "",
      arriveDate: "",
      isRoundTrip: "",
      origin: "",
      originPlaceId: "",
      originState: "",
      originCity: "",
      originCityId: "",
      originCountry: "",
      originCode: "",
      destination: "",
      destinationPlaceId: "",
      destinationState: "",
      destinationCity: "",
      destinationCityId: "",
      destinationCountry: "",
      destinationCode: "",
      outboundCarrierId: "",
      outboundCarrierName: "",
      inboundCarrierId: "",
      inboundCarrierName: "",
      purchased: false,
      price: null,
      status: false,
      exactPath: "",
      visible: false,
      isLoaded: false,
      flights: []
    };
  }
  componentDidMount() {
    // this.props.history.push("/");
    Auth.currentAuthenticatedUser().then(data => {
      this.setState({
        userName: data.attributes.email
      });
    });
    // .catch(err => console.log(err));
  }
  handleNumOfPassengers = props => {
    this.setState(
      {
        numOfPassengers: props
      }
      // () => {
      //   console.log("Current Value: " + this.state.numOfPassengers);
      // }
    );
  };
  handleDate = props => {
    // Create IF ELSE statement to check if values are equal to null
    if (props === null) {
      this.setState(
        {
          departDate: null,
          arriveDate: null
        }
        // () => {
        //   console.log(
        //     "Current Value: " +
        //       this.state.departDate +
        //       " and " +
        //       this.state.arriveDate
        //   );
        // }
      );
    } else {
      this.setState(
        {
          departDate: props[0].format("YYYY-MM-DD"),
          arriveDate: props[1].format("YYYY-MM-DD")
        }
        // () => {
        //   console.log(
        //     "Current Value: " +
        //       this.state.departDate +
        //       " and " +
        //       this.state.arriveDate
        //   );
        // }
      );
    }
  };
  handleStart = props => {
    // Create IF ELSE statement to check if values are equal to null
    if (props === null) {
      this.setState(
        {
          departDate: null
        }
        // () => {
        //   console.log("Current Value: " + this.state.departDate);
        // }
      );
    } else {
      this.setState(
        {
          departDate: props.format("YYYY-MM-DD")
        }
        // () => {
        //   console.log("Current Value: " + this.state.departDate);
        // }
      );
    }
  };
  handleisOneWay = props => {
    this.setState(
      {
        isRoundTrip: props
      }
      // () => {
      //   console.log("Current Value: " + this.state.isRoundTrip);
      // }
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
      }
      // () => {
      //   console.log(
      //     `Logged ${props[0]} located in ${props[1].city}, ${props[1].state}, ${props[1].country} with code ${props[1].key}`
      //   );
      // }
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
      }
      // () => {
      //   console.log(
      //     `Logged ${props[0]} located in ${props[1].city}, ${props[1].state}, ${props[1].country} with code ${props[1].key}`
      //   );
      // }
    );
  };
  handleSaveToPlanner = () => {
    const openNotification = () => {
      notification.success({
        message: "Flight Saved to your Planner!",
        description: `Your flight from ${this.state.originCity} to ${this.state.destinationCity} has been successfully saved!`
      });
    };

    const userData = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        direct: this.state.isRoundTrip,
        userName: this.state.userName,
        price: this.state.price,
        carrierIds: "",
        outboundDepartureDate: this.state.departDate,
        inboundDepartureDate: this.state.arriveDate,
        origin: {
          originId: this.state.originPlaceId,
          originIataCode: this.state.originCode,
          originName: this.state.origin,
          originCityName: this.state.originCity,
          originCityId: this.state.originCityId
        },
        destination: {
          destinationId: this.state.destinationPlaceId,
          destinationIataCode: this.state.destinationCode,
          destinationName: this.state.destination,
          destinationCityName: this.state.destinationCity,
          destinationCityId: this.state.destinationCityId
        },
        outboundCarrier: {
          carrierId: this.state.outboundCarrierId,
          name: this.state.outboundCarrierName
        },
        inboundCarrier: {
          carrierId: this.state.inboundCarrierId,
          name: this.state.inboundCarrierName
        }
      })
    };
    fetch("http://localhost:8080/api/post-reserved-flight", userData)
      .then(res => res.json())
      .catch(error => {
        // console.error("There was an error!", error);
      });

    openNotification();
  };
  redirect = path => {
    history.push(path);
  };
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  handleReturn = e => {
    this.setState({
      visible: false
    });
  };
  handlePurchased = e => {
    this.setState({
      visible: false,
      purchased: true
    });
  };
  handleAfterPurchase = e => {
    this.setState({
      visible: false,
      purchased: false
    });
  };
  getFlightInformation() {
    const URI =
      "http://localhost:8080/api/get-flights?origin=" +
      this.state.originCode +
      "&destination=" +
      this.state.destinationCode +
      "&outboundDate=" +
      this.state.departDate +
      "&inboundDate=" +
      this.state.arriveDate;

    fetch(URI)
      .then(res => {
        if (res.ok) {
          console.log("Getting Information");
          this.setState({
            API: true
          });
        } else if (res.status === 500) {
          console.log("Bad Request!");
          this.setState({
            API: false
          });
        }
        return res.json();
      })
      .then(data => {
        if (this.state.API === true) {
          var newPrice;
          if (data.length === 0) {
            this.setState({
              price: -1
            });
          } else {
            newPrice = data[0].price;
            this.setState(
              {
                isLoaded: true,
                flights: data,
                price: newPrice,
                isRoundTrip: !data[0].direct,
                originPlaceId: data[0].origin.PlaceId,
                originCityId: data[0].origin.CityId,
                destinationPlaceId: data[0].destination.PlaceId,
                destinationCityId: data[0].destination.CityId,
                outboundCarrierId: data[0].outboundCarrier.CarrierId,
                outboundCarrierName: data[0].outboundCarrier.Name,
                inboundCarrierId:
                  data[0].inboundCarrier === null
                    ? null
                    : data[0].inboundCarrier.CarrierId,
                inboundCarrierName:
                  data[0].inboundCarrier === null
                    ? null
                    : data[0].inboundCarrier.Name
              },
              () => console.log(data),
              console.log(this.state)
            );
          }
        }
      });
  }

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
    if (this.state.visible === false && this.state.purchased === true) {
      return (
        <React.Fragment>
          <Result
            style={{
              width: "50%",
              background: "#f7f7fa",
              left: "50%",
              top: "50%",
              transform: "translateX(50%) translateY(50%)"
            }}
            icon={<SmileOutlined />}
            title="Great, we have done all the operations!"
            extra={
              <Button type="primary" onClick={this.handleAfterPurchase}>
                Next
              </Button>
            }
          />
        </React.Fragment>
      );
    } else if (this.state.visible === false) {
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
              showSearch
              placeholder={"Depart From"}
              style={{ width: 400 }}
              onChange={this.handleOrigin}
            >
              {airport.map(data => {
                if (
                  data.country === "United States" &&
                  data.name !== "" &&
                  data.type === "Airports"
                ) {
                  return (
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
                  );
                }
              })}
            </Select>
            <Select
              showSearch
              placeholder={"Arrive In"}
              style={{ width: 400 }}
              onChange={this.handleDestination}
            >
              {airport.map(data => {
                if (
                  data.country === "United States" &&
                  data.name !== "" &&
                  data.type === "Airports"
                ) {
                  return (
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
                  );
                }

                // return data.country === "United States" &&
                //   data.name !== "" &&
                //   data.type === "Airports" ? (
                //   <Option
                //     key={data.code}
                //     value={data.label}
                //     airport={data.name}
                //     city={data.label}
                //     state={data.state}
                //     country={data.country}
                //   >
                //     {" "}
                //     <strong>
                //       {data.label}, {data.state}
                //     </strong>{" "}
                //     <br /> {data.name}{" "}
                //   </Option>
                // ) : (
                //   console.log();
                // );
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
                      status: true,
                      visible: true
                    });
                    this.getFlightInformation();
                  }
                  // this.redirect(this.state.status === true ? "/data" : "");
                }}
                // onClick={this.showModal}
              >
                Find Flights
              </Button>
            </div>
          </div>
        </React.Fragment>
      );
    } else if (this.state.visible === true && this.state.price === -1) {
      return (
        <div>
          <Modal
            centered={true}
            title={
              this.state.arriveDate === ""
                ? `${this.state.originCity} to ${
                    this.state.destinationCity
                  } on ${moment(this.state.departDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )}`
                : `${this.state.originCity} to ${
                    this.state.destinationCity
                  } from ${moment(this.state.departDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )} to ${moment(this.state.arriveDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )}`
            }
            visible={this.state.visible}
            okText="Return"
            onCancel={this.handleReturn}
            onOk={this.handleReturn}
          >
            <Text type="secondary">
              No flights were found. Please try again later.{" "}
            </Text>
          </Modal>
        </div>
      );
    } else {
      return (
        <div>
          <Modal
            centered={true}
            title={
              this.state.arriveDate === ""
                ? `${this.state.originCity} to ${
                    this.state.destinationCity
                  } on ${moment(this.state.departDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )}`
                : `${this.state.originCity} to ${
                    this.state.destinationCity
                  } from ${moment(this.state.departDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )} to ${moment(this.state.arriveDate, "YYYY-MM-DD").format(
                    "MMM Do YYYY"
                  )}`
            }
            visible={this.state.visible}
            okText="Book Now!"
            cancelText="Return"
            onOk={this.handlePurchased}
            onCancel={this.handleReturn}
          >
            <Descriptions layout="vertical" bordered>
              <Descriptions.Item label="Passengers">
                {this.state.numOfPassengers}
              </Descriptions.Item>
              <Descriptions.Item label="Fare Type">
                {this.state.isRoundTrip === false ? "One Way" : "Round Trip"}
              </Descriptions.Item>
              <Descriptions.Item label="Cheapest Price">
                ${this.state.price}
              </Descriptions.Item>
            </Descriptions>
            <Button type="primary" onClick={this.handleSaveToPlanner}>
              Save to Planner
            </Button>
          </Modal>
        </div>
      );
    }
  }
}

export default FlightSearch;
//export default withRouter(FlightSearch);
