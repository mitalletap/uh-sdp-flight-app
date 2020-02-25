import React, { Component } from "react";
import { Table } from "rsuite";
import jsonData from "../data/actualData";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const { Column, HeaderCell, Cell } = Table;
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
          <Card.Header as="h5">2/20/2020</Card.Header>
          <Card.Body>
            <Card.Title>
              {places[0].CityName}->{places[1].CityName}
            </Card.Title>
            <Card.Text>
              <Table autoHeight width={1200} data={[loadData]}>
                <Column width={200}>
                  <HeaderCell>Airliner</HeaderCell>
                  <Cell dataKey="Name">{carriers[1].Name}</Cell>
                </Column>

                <Column width={200}>
                  <HeaderCell>Origin Airport</HeaderCell>
                  <Cell dataKey="Name">{places[0].CityName}</Cell>
                </Column>

                <Column width={200}>
                  <HeaderCell>Destination Airport</HeaderCell>
                  <Cell dataKey="Name">{places[1].CityName}</Cell>
                </Column>

                <Column width={200}>
                  <HeaderCell>Departure Time</HeaderCell>
                  <Cell dataKey="Name">
                    {quotes[0].OutboundLeg.DepartureDate}
                  </Cell>
                </Column>

                <Column width={200}>
                  <HeaderCell>Arrival Time</HeaderCell>
                  <Cell dataKey="Name">
                    {quotes[0].OutboundLeg.DepartureDate}
                  </Cell>
                </Column>

                <Column width={75}>
                  <HeaderCell>Price</HeaderCell>
                  <Cell dataKey="MinPrice">
                    {currency[0].Symbol}
                    {quotes[0].MinPrice}
                  </Cell>
                </Column>
              </Table>
            </Card.Text>
            <Button variant="primary">Book now</Button>
          </Card.Body>
        </Card>
        <br />
      </div>
    );
  }
}

export default CardDisp;
