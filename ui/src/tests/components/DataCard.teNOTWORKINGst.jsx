import React from "react";
import DataCard from "../../components/DataCard";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("card-disp testing", () => {
  let wrapper;
  let airliner;
  beforeEach(() => {
    wrapper = shallow(
      <DataCard skeleton={true} outboundCarrier={"Delta Airlines"} />
    );
  });

  // Expects to find the skeleton prop
  it("should contain skeleton props", () => {
    expect(wrapper.props("skeleton")).toBeDefined();
  });

  // Handles switch statement
  it("should contain outbound-carrier props", () => {
    let airlinerImage;
    const DataCard = ({ outboundCarrier }) => {
      switch (outboundCarrier) {
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
    };

    expect(airlinerImage).toBe("DAL.png");
  });
});
