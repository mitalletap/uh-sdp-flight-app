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
