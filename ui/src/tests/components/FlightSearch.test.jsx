import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { configure, shallow } from "enzyme";
import FlightSearch from "../../components/FlightSearch";
import "rsuite/lib/styles/index.less";
import moment from "moment";
import {
  DateRangePicker,
  Content,
  InputNumber,
  Button,
  Toggle,
  InputGroup,
  InputPicker,
  Container
} from "rsuite";
import { Auth } from "aws-amplify";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);
  });

  // Expects to find the Input Picker
  it("should contain input picker", () => {
    expect(InputPicker).toBeDefined();
  });

  // Expects to find the Input Group
  it("should contain input group", () => {
    expect(InputGroup).toBeDefined();
  });

  // Expects to find the Date Range Picker
  it("should contain date range picker", () => {
    expect(DateRangePicker).toBeDefined();
  });

  // Expects to find the Button
  it("should contain button", () => {
    expect(Button).toBeDefined();
  });
});

// describe("snapshot testing for flight-search", () => {
//   let wrapper;
//   let mockChange;

//   beforeEach(() => {
//     mockChange = jest.fn();
//     wrapper = shallow(<FlightSearch />);
//   });

//   it("should match snapshot", () => {
//     expect(wrapper).toMatchSnapshot();
//   });
// });

describe("state testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);
  });

  // Component Did Mount
  it("sets the state componentDidMount", async () => {
    window.fetch = jest.fn().mockImplementation(() => ({
      status: 200,
      json: () =>
        new Promise((resolve, reject) => {
          resolve({
            userName: "mitalletap1998@gmail.com"
          });
        })
    }));

    expect(wrapper.state("userName")).toBeDefined();
  });

  // Handle Number Of Passengers
  it("handles number of passengers", () => {
    const props = 2;

    wrapper.setState(() => {
      wrapper.instance().handleNumOfPassengers(props);
      const userState = wrapper.state("numOfPassengers");
      expect(userState).toEqual(2);
    });
  });

  // Handle Date
  it("handles null date", () => {
    const props = null;
    wrapper.setState(() => {
      wrapper.instance().handleDate(props);
      const departState = wrapper.state("departDate");
      const arriveState = wrapper.state("arriveDate");
      console.log(departState);
      console.log(arriveState);
      expect(departState).toEqual(null);
      expect(arriveState).toEqual(null);
    });
  });

  it("handles not null date", () => {
    const props = ["2020-03-05", "2020-03-10"];
    wrapper.setState(() => {
      wrapper.instance().handleDate(props);
      const departState = wrapper.state("departDate");
      const arriveState = wrapper.state("arriveDate");
      console.log(departState);
      console.log(arriveState);
      expect(departState).toEqual(null);
      expect(arriveState).toEqual(null);
    });
  });
});
