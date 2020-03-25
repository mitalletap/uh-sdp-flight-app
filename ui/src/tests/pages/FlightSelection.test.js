import React from "react";
import FlightSelection from "../../pages/FlightSelection";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import FlightSearch from "../../components/FlightSearch";
import { Container, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSelection />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(Container).toBeDefined();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(Content).toBeDefined();
  });

  // Expects to find the FlightSearch containing all Elements
  it("should contain flight search", () => {
    expect(wrapper.find("FlightSearch").exists());
  });
});
