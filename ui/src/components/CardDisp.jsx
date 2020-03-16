import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import jsonData from "../data/actualData";
import moment from "moment";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Progress } from "antd";

const CardDisp = props => {
  var title = `${props.originCity} to ${props.destinationCity} from ${moment(
    props.departDate,
    "YYYY-MM-DD"
  ).format("MMM Do YYYY")} to ${moment(props.arriveDate, "YYYY-MM-DD").format(
    "MMM Do YYYY"
  )}`;
  return (
    <React.Fragment>
      <div
        className="site-card-border-less-wrapper"
        style={{ textAlign: "center" }}
      >
        <Card
          size="small"
          title={title}
          bordered={false}
          style={{
            width: "50%",
            background: "#f7f7fa",
            left: "50%",
            top: "50%",
            transform: "translateX(-50%) translateY(-50%)"
          }}
        >
          <div className="CardContents" style={{ display: "inline" }}>
            <div
              className="data"
              style={{ display: "table-cell", height: "100%" }}
            >
              <div
                className="origin"
                style={{
                  display: "table-cell",
                  height: "100%",
                  width: "50px",
                  paddingRight: "10px"
                }}
              >
                <p> {props.originCode} </p>
              </div>
              <Progress
                strokeColor={{ "0%": "#108ee9", "100%": "#87d068" }}
                style={{ display: "table-cell", height: "100%" }}
                percent={99.9}
                showInfo={false}
              />
              <div
                className="destination"
                style={{
                  display: "table-cell",
                  height: "100%",
                  width: "50px",
                  paddingLeft: "10px"
                }}
              >
                <p> {props.destinationCode} </p>
              </div>
            </div>
            <div
              className="price"
              style={{
                display: "table-cell",
                height: "50%",
                width: "50%",
                verticalAlign: "middle"
              }}
            >
              <p> ${props.price} </p>
            </div>
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default CardDisp;

{
  /* 
import React, { Component } from "react";
import Table from "react-bootstrap/Table";
import jsonData from "../data/actualData";
import { Card, Button, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// const { Column, HeaderCell, Cell } = Table;
var loadData = JSON.parse(JSON.stringify(jsonData));

class CardDisp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: loadData.Quotes,
      places: loadData.Places,
      carriers: loadData.Carriers,
      currency: loadData.Currencies
    };
  }

  render() {
    let { quotes, places, carriers, currency } = this.state;
    console.log(loadData);
    return (
      <div>
        <Card bg="dark" text="white">
          <Card.Header as="h5">
            User's Planner
          </Card.Header>

          <Card.Body>
            <Card.Title>
              {places[0].CityName}->{places[1].CityName}
            </Card.Title>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Airliner</th>
                  <th>Depart</th>
                  <th>Arrive</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>$</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{carriers[1].Name}</td>
                </tr>
                <tr>
                  <td>2</td>
                </tr>
                <tr>
                  <td>3</td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary">Book now</Button>
          </Card.Body>

        </Card>
      </div>
    );
  }
}

export default CardDisp;



<div>
        <Card bg="dark" text="white">
          <Card.Header as="h5">
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Departure</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Arrival</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>
              {places[0].CityName}->{places[1].CityName}
            </Card.Title>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Airliner</th>
                  <th>Origin Airport</th>
                  <th>Destination Airport</th>
                  <th>Departure Time</th>
                  <th>Arrival Time</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>{carriers[1].Name}</td>
                  <td>{places[0].CityName}</td>
                  <td>{places[1].CityName}</td>
                  <td>{quotes[0].OutboundLeg.DepartureDate}</td>
                  <td>{quotes[0].OutboundLeg.DepartureDate}</td>
                  <td>
                    {currency[0].Symbol} {quotes[0].MinPrice}
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td>3</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
      </div>
 */
}
