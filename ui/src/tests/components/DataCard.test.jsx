import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import DataCard from "../../components/DataCard";

Enzyme.configure({ adapter: new Adapter() });
describe("card-disp testing", () => {
  let wrapper;

  describe("skeleton", () => {
    beforeEach(() => {
      wrapper = shallow(<DataCard skeleton />);
    });

    it("props should be defined", () => {
      expect(wrapper.props("title")).toBeDefined();
    });

    // Expects to find the skeleton prop
    it("should contain skeleton props", () => {
      expect(wrapper.props("skeleton")).toBeDefined();
    });
  });

  describe("active", () => {
    beforeEach(() => {
      wrapper = shallow(<DataCard active />);
    });

    it("should render SWA", () => {
      wrapper = shallow(
        <DataCard outboundCarrier="Southwest Airlines" active />
      );
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render NKS", () => {
      wrapper = shallow(<DataCard outboundCarrier="Spirit Airlines" active />);
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render UAL", () => {
      wrapper = shallow(<DataCard outboundCarrier="United Airlines" active />);
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render FFT", () => {
      wrapper = shallow(
        <DataCard outboundCarrier="Frontier Airlines" active />
      );
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render AAL", () => {
      wrapper = shallow(
        <DataCard outboundCarrier="American Airlines" active />
      );
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render DAL", () => {
      wrapper = shallow(<DataCard outboundCarrier="Delta Airlines" active />);
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });

    it("should render default", () => {
      wrapper = shallow(<DataCard outboundCarrier="Airlines" active />);
      expect(wrapper.props("outboundCarrier")).toBeDefined();
    });
  });
});
