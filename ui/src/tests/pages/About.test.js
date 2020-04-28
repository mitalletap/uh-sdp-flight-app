import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme from "enzyme";
import renderer from "react-test-renderer";

import { Avatar, Typography, Divider } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  FileTextOutlined,
  GlobalOutlined
} from "@ant-design/icons";

const { Text } = Typography;
Enzyme.configure({ adapter: new Adapter() });

describe("test about page", () => {
  it("should check snapshot testing", () => {
    const tree = renderer
      .create(
        <React.Fragment>
          <div style={{ paddingBottom: "100px" }}>
            <div
              style={{
                backgroundColor: "white",
                padding: "100px",
                height: "100%",
                width: "50%",
                textAlign: "center",
                top: "50%",
                transform: "translateX(50%) translateY(10%)"
              }}
            >
              <div className="header">
                <Text>
                  <h1> MEET THE TEAM </h1>
                </Text>
              </div>
              <div className="information">
                <div
                  className="Kevin"
                  style={{
                    display: "table",
                    height: "300px",
                    paddingBottom: "100px"
                  }}
                >
                  <div style={{ float: "left", height: "100%", width: "20%" }}>
                    <Avatar
                      size={250}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </div>
                  <div
                    style={{
                      float: "right",
                      textAlign: "right",
                      width: "80%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div>
                      <Text>
                        <h1 style={{ fontSize: "40px" }}> KEVIN HUYNH </h1>
                      </Text>
                      <Text>
                        {" "}
                        Kevin Huynh is a Senior at the University of Houston. He
                        has taken courses such as Data Structures, Algorithms,
                        and Database Systems.{" "}
                      </Text>
                    </div>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <GithubOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <LinkedinOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <FileTextOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <GlobalOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="information">
                <div
                  className="Kevin"
                  style={{
                    display: "table",
                    height: "300px",
                    paddingBottom: "100px"
                  }}
                >
                  <div style={{ float: "left", height: "100%", width: "20%" }}>
                    <Avatar
                      size={250}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </div>
                  <div
                    style={{
                      float: "right",
                      textAlign: "right",
                      width: "80%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div>
                      <Text>
                        <h1 style={{ fontSize: "40px" }}> KEVIN HUYNH </h1>
                      </Text>
                      <Text>
                        {" "}
                        Kevin Huynh is a Senior at the University of Houston. He
                        has taken courses such as Data Structures, Algorithms,
                        and Database Systems.{" "}
                      </Text>
                    </div>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <GithubOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <LinkedinOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <FileTextOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <GlobalOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="information">
                <div
                  className="Kevin"
                  style={{
                    display: "table",
                    height: "300px",
                    paddingBottom: "100px"
                  }}
                >
                  <div style={{ float: "left", height: "100%", width: "20%" }}>
                    <Avatar
                      size={250}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </div>
                  <div
                    style={{
                      float: "right",
                      textAlign: "right",
                      width: "80%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div>
                      <Text>
                        <h1 style={{ fontSize: "40px" }}> KEVIN HUYNH </h1>
                      </Text>
                      <Text>
                        {" "}
                        Kevin Huynh is a Senior at the University of Houston. He
                        has taken courses such as Data Structures, Algorithms,
                        and Database Systems.{" "}
                      </Text>
                    </div>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <GithubOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <LinkedinOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <FileTextOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <GlobalOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="information">
                <div
                  className="Kevin"
                  style={{
                    display: "table",
                    height: "300px",
                    paddingBottom: "100px"
                  }}
                >
                  <div style={{ float: "left", height: "100%", width: "20%" }}>
                    <Avatar
                      size={250}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </div>
                  <div
                    style={{
                      float: "right",
                      textAlign: "right",
                      width: "80%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div>
                      <Text>
                        <h1 style={{ fontSize: "40px" }}> KEVIN HUYNH </h1>
                      </Text>
                      <Text>
                        {" "}
                        Kevin Huynh is a Senior at the University of Houston. He
                        has taken courses such as Data Structures, Algorithms,
                        and Database Systems.{" "}
                      </Text>
                    </div>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <GithubOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <LinkedinOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <FileTextOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <GlobalOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className="information">
                <div
                  className="Kevin"
                  style={{
                    display: "table",
                    height: "300px",
                    paddingBottom: "100px"
                  }}
                >
                  <div style={{ float: "left", height: "100%", width: "20%" }}>
                    <Avatar
                      size={250}
                      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    />
                  </div>
                  <div
                    style={{
                      float: "right",
                      textAlign: "right",
                      width: "80%",
                      height: "100%",
                      position: "relative"
                    }}
                  >
                    <div>
                      <Text>
                        <h1 style={{ fontSize: "40px" }}> KEVIN HUYNH </h1>
                      </Text>
                      <Text>
                        {" "}
                        Kevin Huynh is a Senior at the University of Houston. He
                        has taken courses such as Data Structures, Algorithms,
                        and Database Systems.{" "}
                      </Text>
                    </div>
                    <div
                      style={{ position: "absolute", bottom: "0", right: "0" }}
                    >
                      <GithubOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <LinkedinOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <FileTextOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                      <GlobalOutlined
                        style={{ fontSize: "45px", paddingRight: "10px" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
