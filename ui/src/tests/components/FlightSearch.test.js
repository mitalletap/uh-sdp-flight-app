// npm run test:coverage

import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import FlightSearch from "../../components/FlightSearch";
import "rsuite/lib/styles/index.less";
import {
  DateRangePicker,
  Content,
  InputNumber,
  Button,
  Toggle,
  InputGroup,
  InputPicker
} from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);
  });

  // Expects to find the content containing all Elements
  it("should contain content", () => {
    expect(wrapper.find(Content).exists()).toBeTruthy();
  });

  // Expects to find the Input Picker
  it("should contain input picker", () => {
    expect(wrapper.find(InputPicker).exists()).toBeTruthy();
  });

  // Expects to find the Input Group
  it("should contain input group", () => {
    expect(wrapper.find(InputGroup).exists()).toBeTruthy();
  });

  // Expects to find the Date Range Picker
  it("should contain date range picker", () => {
    expect(wrapper.find(DateRangePicker).exists()).toBeTruthy();
  });

  // Expects to find the Button
  it("should contain button", () => {
    expect(wrapper.find(Button).exists()).toBeTruthy();
  });

  // Expects to handle NumberOfPassengers
  it("should handle number of passengers", () => {
    expect(wrapper.state().numOfPassengers).toEqual(1);
  });

  // Expects to handle Departure Date
  it("should handle departure date", () => {
    //   const datePicker = wrapper.find(InputPicker).at(0);
    //   datePicker.simulate('click');
    expect(wrapper.state().departDate).toEqual("");
  });
});
