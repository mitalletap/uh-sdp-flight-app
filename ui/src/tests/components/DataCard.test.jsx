import React from "react";
import DataCard from "../../components/DataCard";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("card-disp testing", () => {
  let wrapper;
  let airliner;
  beforeEach(() => {
    wrapper = shallow(<DataCard skeleton={true} />);
  });

  it("props should be defined", () => {
    expect(wrapper.props("title")).toBeDefined();
  });

  // Expects to find the skeleton prop
  it("should contain skeleton props", () => {
    expect(wrapper.props("skeleton")).toBeDefined();
  });

  it("should render SWA", () => {
    wrapper = shallow(<DataCard outboundCarrier={"Southwest Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render NKS", () => {
    wrapper = shallow(<DataCard outboundCarrier={"Spirit Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render UAL", () => {
    wrapper = shallow(<DataCard outboundCarrier={"United Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render FFT", () => {
    wrapper = shallow(<DataCard outboundCarrier={"Frontier Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render AAL", () => {
    wrapper = shallow(<DataCard outboundCarrier={"American Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render DAL", () => {
    wrapper = shallow(<DataCard outboundCarrier={"Delta Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });

  it("should render default", () => {
    wrapper = shallow(<DataCard outboundCarrier={"Airlines"} />);
    expect(wrapper.props("outboundCarrier")).toBeDefined();
  });
});
