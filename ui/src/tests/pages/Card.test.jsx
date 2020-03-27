import React from "react";
import Card from "../../pages/Card";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import CardDisp from "../../components/CardDisp";
import { Container, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(wrapper.find("Container")).toBeDefined();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(wrapper.find("Content")).toBeDefined();
  });

  // Expects to find the Card Disp
  it("should contain card disp", () => {
    expect(wrapper.find("CardDisp")).toBeDefined();
  });
});
