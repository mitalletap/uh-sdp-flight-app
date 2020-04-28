import React from "react";
import { Card, Progress, notification } from "antd";
import airplaneIcon from "../images/airplaneicon.png";
import transparentPlane from "../images/30transparentPlane.png";
import SWA from "../images/AirlinerLogos/SWA.png";
import NKS from "../images/AirlinerLogos/NKS.png";
import UAL from "../images/AirlinerLogos/UAL.png";
import FFT from "../images/AirlinerLogos/FFT.png";
import AAL from "../images/AirlinerLogos/AAL.png";
import DAL from "../images/AirlinerLogos/DAL.png";
import VRD from "../images/AirlinerLogos/VRD.png";

let airlinerImage = "";
const DataCard = props => {
  const activeState = props.active;
  const purchasedState = props.purchased;
  console.log(props.active);

  const purchasedFlight = () => {
    notification.success({
      message: "Flight has been purchased!",
      description: `Your flight from ${props.originCode} to ${props.destinationCode} has been successfully purchased!`
    });
  };
  if (props.skeleton === true) {
    return (
      <React.Fragment>
        <div
          className="site-card-border-less-wrapper"
          style={{ textAlign: "center" }}
        >
          <Card
            loading={props.skeleton}
            size="small"
            title={props.title}
            bordered={false}
            style={{
              width: "500px",
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
                <p> ${props.price}</p>
              </div>
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
  if (activeState === true) {
    switch (props.outboundCarrier) {
      case "Southwest Airlines":
        airlinerImage = SWA;
        break;
      case "Spirit Airlines":
        airlinerImage = NKS;
        break;
      case "United Airlines":
        airlinerImage = UAL;
        break;
      case "Frontier Airlines":
        airlinerImage = FFT;
        break;
      case "American Airlines":
        airlinerImage = AAL;
        break;
      case "Delta Airlines":
        airlinerImage = DAL;
        break;
      default:
        airlinerImage = VRD;
    }
    return (
      <React.Fragment>
        <div
          className="site-card-border-less-wrapper"
          style={{ textAlign: "center" }}
        >
          <Card
            size="small"
            title={props.title}
            bordered={false}
            style={{
              width: "500px",
              left: "50%",
              top: "50%",
              transform: "translateX(-50%) translateY(-50%)",
              display: "table",
              verticalAlign: "middle",
              backgroundImage: `url(${transparentPlane})`,
              backgroundSize: "200px",
              backgroundRepeat: "no-repeat",
              backgroundPositionX: "340px",
              backgroundPositionY: "45px"
            }}
          >
            <div
              style={{
                float: "left",
                paddingRight: "10px",
                display: "table-cell",
                paddingLeft: "10px"
              }}
            >
              <img alt="airliner" src={airlinerImage} />
            </div>

            <div
              className="CardContents"
              style={{
                display: "inline-block",
                height: "50%",
                fontSize: "25px"
              }}
            >
              <div
                className="data"
                style={{
                  display: "table",
                  height: "100px",
                  paddingTop: "25px"
                }}
              >
                <div
                  className="origin"
                  style={{
                    display: "table-cell",
                    height: "100%",
                    width: "100px",
                    paddingRight: "10px"
                  }}
                >
                  <p> {props.originCode} </p>
                </div>
                <img
                  src={airplaneIcon}
                  alt={airlinerImage}
                  style={{ display: "inline-block" }}
                  height="30px"
                  width="30px"
                />
                <div
                  className="destination"
                  style={{
                    display: "table-cell",
                    height: "100%",
                    width: "100px",
                    paddingLeft: "10px"
                  }}
                >
                  <p> {props.destinationCode} </p>
                </div>
              </div>
            </div>

            <div
              className="price"
              style={{
                float: "right",
                fontSize: "25px",
                display: "table-cell",
                paddingTop: "25px",
                paddingRight: "10px"
              }}
            >
              <p> ${props.price}</p>
            </div>

            <div style={{ backgroundColor: "red", textAlign: "center" }}>
              {purchasedState === true ? (
                <React.Fragment />
              ) : (
                <React.Fragment>
                  <h4 style={{ float: "left", fontSize: "12px" }}>
                    {" "}
                    ** This Flight has not been booked{" "}
                  </h4>
                  <div />
                </React.Fragment>
              )}
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
};
export default DataCard;
