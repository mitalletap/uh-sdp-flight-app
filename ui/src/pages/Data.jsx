import React, { useState } from "react";
import DataTable from "../components/DataTable";
import NavBar from "../components/NavBar";
import { Container, Header, Footer, Content, Toggle, Navbar } from "rsuite";

const Data = () => {
  const [flightData, setFlightData] = useState([
    {
      id: 1,
      direct: true,
      userName: "NemoTheHero",
      price: 199,
      carrierIds: [851],
      derpartureDate: "2020/02/20",
      origin: {
        originId: 81727,
        originIataCode: "SFO",
        originName: "San Francisco International",
        originCityName: "San Francisco",
        originCityId: "SFOA"
      },
      destination: {
        destinationId: 60987,
        destinationIataCode: "JFK",
        destinationName: "New York John F. Kennedy",
        destinationCityName: "New York",
        destinationCityId: "NYCA"
      },
      outboundCarrier: {
        carrierId: 521,
        name: "Swoosh Lanes"
      },
      inboundCarrier: {
        carrierId: 792,
        name: "Fast Landings"
      }
    },
    {
      id: 2,
      direct: true,
      userName: "MitalPatel",
      price: 203,
      carrierIds: [851],
      derpartureDate: "2020/02/26",
      origin: {
        originId: 81727,
        originIataCode: "ATL",
        originName: "Hartsfield Jackson International",
        originCityName: "Atlanta",
        originCityId: "ATL"
      },
      destination: {
        destinationId: 60987,
        destinationIataCode: "HOU",
        destinationName: "Houston Hobby",
        destinationCityName: "Houston",
        destinationCityId: "HOU"
      },
      outboundCarrier: {
        carrierId: 521,
        name: "Southwest"
      },
      inboundCarrier: {
        carrierId: 792,
        name: "Southwest"
      }
    }
  ]);

  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavBar />
        </Header>
        <Content>
          {/* <DataTable /> */}
          <div>
            {flightData.map(data => (
              <React.Fragment>
                <li> {data.id} </li>
                <li> {data.userName} </li>
                <li> {data.origin.originCityName} </li>
                <li> {data.destination.destinationCityName} </li>
              </React.Fragment>
            ))}
          </div>
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Data;
