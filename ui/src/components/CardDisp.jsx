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
    );
  }
}

export default CardDisp;
