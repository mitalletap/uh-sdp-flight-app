import React from "react";
import { Card, Progress } from "antd";
import airplaneIcon from "../images/airplaneicon.png";
import transparentPlane from "../images/30transparentPlane.png";

var airlinerImage = "";

{
  /* 

Delta - DAL
American Airlines - AAL
United Airlines - UAL
Spirit Airlines - NKS
Frontier Airlines - FFT
Southwest Airlines - SWA



*/
}

const DataCard = props => {
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
                <p> ${props.price} </p>
              </div>
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  } else {
    function importAll(r) {
      let images = {};
      r.keys().map((item, index) => {
        images[item.replace("./", "")] = r(item);
      });
      return images;
    }
    const images = importAll(
      require.context("../images/AirlinerLogos", false, /\.(png|jpe?g|svg)$/)
    );
    switch (props.outboundCarrier) {
      case "Southwest Airlines":
        airlinerImage = "SWA.png";
        break;
      case "Spirit Airlines":
        airlinerImage = "NKS.png";
        break;
      case "United Airlines":
        airlinerImage = "UAL.png";
        break;
      case "Frontier Airlines":
        airlinerImage = "FFT.png";
        break;
      case "American Airlines":
        airlinerImage = "SWA.png";
        break;
      case "Delta Airlines":
        airlinerImage = "DAL.png";
        break;
      default:
        airlinerImage = "VRD.png";
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
              // background: "#f7f7fa",
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
            {/* 
                        backgroundImage: `url(${transparentPlane})`, 
                        backgroundSize: "300px", 
                        backgroundRepeat: "no-repeat", 
                        backgroundPositionX: "-200px",
                        backgroundPositionY: "50px"  */}
            {/* <div style={{ zIndex: "-1"}}> 
                            <img src={transparentPlane} style={{ height: "10px", zIndex: -1}}/>
                        </div> */}
            <div
              style={{
                float: "left",
                paddingRight: "10px",
                display: "table-cell",
                paddingLeft: "10px"
              }}
            >
              <img src={images[airlinerImage]} alt={images[airlinerImage]} />
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
                  alt={images[airlinerImage]}
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
              <p> ${props.price} </p>
            </div>
          </Card>
        </div>
      </React.Fragment>
    );
  }
};
export default DataCard;
