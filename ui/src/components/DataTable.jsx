import React, { Component } from "react";
import { Table } from "rsuite";
import jsonData from "../data/actualData";
const { Column, HeaderCell, Cell } = Table;
var loadData = JSON.parse(JSON.stringify(jsonData));

class DataTable extends Component {
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
        <Table autoHeight width={900} data={[loadData]}>
          <Column width={50} align="center">
            <HeaderCell>#</HeaderCell>
            <Cell dataKey={"QuoteId"}> {quotes[0].QuoteId} </Cell>
          </Column>

          <Column width={75}>
            <HeaderCell>Price</HeaderCell>
            <Cell dataKey="MinPrice">
              {currency[0].Symbol}
              {quotes[0].MinPrice}
            </Cell>
          </Column>

          <Column width={200}>
            <HeaderCell>Origin City</HeaderCell>
            <Cell dataKey="Name">{places[0].CityName}</Cell>
          </Column>

          <Column width={200}>
            <HeaderCell>Destination City</HeaderCell>
            <Cell dataKey="Name">{places[1].CityName}</Cell>
          </Column>

          <Column width={100}>
            <HeaderCell>Airliner</HeaderCell>
            <Cell dataKey="Name">{carriers[1].Name}</Cell>
          </Column>

          <Column width={200}>
            <HeaderCell>Time</HeaderCell>
            <Cell dataKey="Name">{quotes[0].OutboundLeg.DepartureDate}</Cell>
          </Column>
        </Table>
      </div>
    );
  }
}

export default DataTable;

/*
// Parsing Data from JSON file and displaying on poge
<React.Fragment>
                <Line percent={30} strokeColor="#ffc107" />
                {Data.map((index, attribtue) => {
                    return <h1> {index.label} </h1>
                })}
</React.Fragment>

*/
