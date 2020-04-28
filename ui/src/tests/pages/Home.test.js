import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Container, Content } from "rsuite";
import Home from "../../pages/Home";

Enzyme.configure({ adapter: new Adapter() });
describe("home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  it("should contain container", () => {
    expect(wrapper.find(Container).exists()).toBeTruthy();
  });

  it("should contain content", () => {
    expect(wrapper.find(Content).exists()).toBeTruthy();
  });

  it("should contain h1", () => {
    const text = wrapper.find("h1");
    expect(text.text()).toBe(" Welcome to Takeoff ");
  });
});
