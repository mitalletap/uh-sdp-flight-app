import React, { useState } from "react";
import NavBar from "../components/NavBar";
import DataTable from "../components/DataTable";
import { Container, Header, Footer, Content } from "rsuite";
import { Calendar, Badge } from "antd";

const Data = () => {
  const [flightData] = useState([
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
  function onPanelChange(value, mode) {
    console.log(value.format("YYYY-MM-DD"), mode);
  }
  function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." }
        ];
        break;
      case 10:
        listData = [
          { type: "warning", content: "This is warning event." },
          { type: "success", content: "This is usual event." },
          { type: "error", content: "This is error event." }
        ];
        break;
      case 15:
        listData = [
          { type: "warning", content: "This is warning event" },
          { type: "success", content: "This is very long usual event。。...." },
          { type: "error", content: "This is error event 1." },
          { type: "error", content: "This is error event 2." },
          { type: "error", content: "This is error event 3." },
          { type: "error", content: "This is error event 4." }
        ];
        break;
      default:
    }
    return listData || [];
  }

  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {listData.map(item => (
          <li key={item.content}>
            <Badge status={item.type} text={item.content} />
          </li>
        ))}
      </ul>
    );
  }

  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }

  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavBar />
        </Header>
        <Content>
          <DataTable />
          {/* <div>
            <Calendar dateCellRender={dateCellRender} monthCellRender={monthCellRender} />
          </div> */}
        </Content>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default Data;
