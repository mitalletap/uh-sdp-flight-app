import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Card from "../../pages/Card";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Card />);
  });

  it("should contain container", () => {
    expect(wrapper.find("Container")).toBeDefined();
  });

  it("should contain content", () => {
    expect(wrapper.find("Content")).toBeDefined();
  });

  it("should contain card disp", () => {
    expect(wrapper.find("CardDisp")).toBeDefined();
  });
});
