// npm run test:coverage

import React from "react";
import FlightSelection from "../../pages/FlightSelection";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import NavBar from "../../components/NavBar";
import FlightSearch from "../../components/FlightSearch";
import { Container, Header, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSelection />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(wrapper.find(Container).exists()).toBeTruthy();
  });

  // Expects to find the Header containing all Elements
  it("should contain header", () => {
    expect(wrapper.find(Header).exists()).toBeTruthy();
  });

  // Expects to find the NavBar
  it("should contain navbar", () => {
    expect(wrapper.find(NavBar).exists()).toBeTruthy();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(wrapper.find(Content).exists()).toBeTruthy();
  });

  // Expects to find the FlightSearch containing all Elements
  it("should contain flight search", () => {
    expect(wrapper.find(FlightSearch).exists());
  });
});
