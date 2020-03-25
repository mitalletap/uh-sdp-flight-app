import React from "react";
import Home from "../../pages/Home";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import NavBar from "../../components/NavBar";
import { Container, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("home", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(wrapper.find(Container).exists()).toBeTruthy();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(wrapper.find(Content).exists()).toBeTruthy();
  });

  // Expects to find the h1 tag and its content
  it("should contain h1", () => {
    const text = wrapper.find("h1");
    expect(text.text()).toBe(" Welcome to Takeoff ");
  });
});
