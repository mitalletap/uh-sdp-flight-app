// npm run test:coverage

import React from "react";
import App from "../../App";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { render } from "@testing-library/react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import planeImg from "../../images/Plane2.jpg";

Enzyme.configure({ adapter: new Adapter() });

describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  // Expects to find the div containing all Elements
  it("should contain div", () => {
    expect(wrapper.find("div").exists()).toBeTruthy();
  });

  // Expects to find the Switch Elements
  it("should contain switch", () => {
    expect(wrapper.find(Switch).exists()).toBeTruthy();
  });

  // Expects to find the Router Elements
  it("should contain router", () => {
    expect(wrapper.find(Router).exists()).toBeTruthy();
  });
});
