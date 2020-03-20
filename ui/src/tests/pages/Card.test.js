// npm run test:coverage

import React from "react";
import Card from "../../pages/Card";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import CardDisp from "../../components/CardDisp";
import NavBar from "../../components/NavBar";
import { Container, Header, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
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

  // Expects to find the Card Disp
  it("should contain card disp", () => {
    expect(wrapper.find(CardDisp).exists()).toBeTruthy();
  });
});
