import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { App } from "../../App";
import Home from "../../pages/Home";
import FlightSelection from "../../pages/FlightSelection";
import Data from "../../pages/Data";
import Profile from "../../pages/Profile";
import About from "../../pages/About";

Enzyme.configure({ adapter: new Adapter() });
describe("app testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it("renders router", () => {
    expect(wrapper.find("Router")).not.toBe(null);
  });

  it("should render Flight Selection", () => {
    const route = wrapper.find("Route").first();
    const { render } = route.props();
    const props = { props: "test" };
    const rendered = render(props);
    expect(route.props().path).toEqual("/");
    expect(rendered.type).toEqual(FlightSelection);
    expect(rendered.props).toEqual(props);
  });

  it("should render Data", () => {
    const route = wrapper.find("Route").at(1);
    const { render } = route.props();
    const props = { props: "test" };
    const rendered = render(props);
    expect(route.props().path).toEqual("/planner");
    expect(rendered.type).toEqual(Data);
    expect(rendered.props).toEqual(props);
  });

  it("should render Logout", () => {
    const route = wrapper.find("Route").at(2);
    const { render } = route.props();
    const props = { props: "test" };
    const rendered = render(props);
    expect(route.props().path).toEqual("/logout");
    expect(rendered.type).toEqual(Home);
    expect(rendered.props).toEqual(props);
  });

  it("should render Profile", () => {
    const route = wrapper.find("Route").at(3);
    const { render } = route.props();
    const props = { props: "test" };
    const rendered = render(props);
    expect(route.props().path).toEqual("/profile");
    expect(rendered.type).toEqual(Profile);
    expect(rendered.props).toEqual(props);
  });

  it("should render About", () => {
    const route = wrapper.find("Route").at(4);
    const { render } = route.props();
    const props = { props: "test" };
    const rendered = render(props);
    expect(route.props().path).toEqual("/about");
    expect(rendered.type).toEqual(About);
    expect(rendered.props).toEqual(props);
  });
});
