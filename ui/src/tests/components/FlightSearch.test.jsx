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
jest.mock("moment", () => {
  const mMoment = {
    format: jest.fn().mockReturnThis(),
    valueOf: jest.fn()
  };
  return jest.fn(() => mMoment);
});

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

  // it("handles disable date", async () => {
  //   // var check = wrapper.find("disabledDate");
  //   // console.log(check);
  //   const props = "2020-01-01";

  //   wrapper.setState(() => {
  //     wrapper.instance().disabledDate(props);
  //     const disabled = wrapper.state("disabled");
  //     expect(disabled).toBeFalsy;
  //   });
  // });

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
      expect(departState).toEqual(null);
      expect(arriveState).toEqual(null);
    });
  });

  // it("handles not null date", () => {
  //   const props = ["2020-03-05", "2020-03-10"];
  //   wrapper.setState(() => {
  //     wrapper.instance().handleDate(props);
  //     const departState = wrapper.state("departDate");
  //     const arriveState = wrapper.state("arriveDate");
  //     expect(departState).toBeDefined();
  //     expect(arriveState).toBeDefined();
  //   });
  // });

  it("handles null start", () => {
    const props = null;
    wrapper.setState(() => {
      wrapper.instance().handleStart(props);
      const departState = wrapper.state("departDate");
      expect(departState).toEqual(null);
    });
  });

  // it("handles not null start", () => {
  //   const props = "2020-03-05";
  //   wrapper.setState(() => {
  //     wrapper.instance().handleStart(props);
  //     const departState = wrapper.state("departDate");
  //     console.log(departState);
  //     expect(departState).toBeDefined();
  //   });
  // });

  it("handles one way", () => {
    const props = true;
    wrapper.setState(() => {
      wrapper.instance().handleisOneWay(props);
      const rt = wrapper.state("isRoundTrip");
      expect(rt).toBe(true);
    });
  });

  // it("handles origin", () => {
  //   const props = ["Bush Airport", "Houston", "Texas", "USA", 1];
  //   wrapper.setState(() => {
  //     wrapper.instance().handleOrigin(props);
  //     const airport = wrapper.state("origin");
  //     const city = wrapper.state("originCity");
  //     const state = wrapper.state("originState");
  //     const country = wrapper.state("originCountry");
  //     const id = wrapper.state("originCode");
  //     console.log(airport);
  //     console.log(city);
  //     console.log(state);
  //     console.log(country);
  //     console.log(id);
  //     expect(airport).toBeDefined();
  //     expect(city).toBeDefined();
  //     expect(state).toBeDefined();
  //     expect(country).toBeDefined();
  //     expect(id).toBeDefined();
  //   });
  // });

  // it("handles destination", () => {
  //   const props = ["Bush Airport", "Houston", "Texas", "USA", 1];
  //   wrapper.setState(() => {
  //     wrapper.instance().handleDestination(props);
  //     const airport = wrapper.state("destination");
  //     const city = wrapper.state("destinationCity");
  //     const state = wrapper.state("destinationState");
  //     const country = wrapper.state("destinationCountry");
  //     const id = wrapper.state("destinationCode");
  //     expect(airport).toBeDefined();
  //     expect(city).toBeDefined();
  //     expect(state).toBeDefined();
  //     expect(country).toBeDefined();
  //     expect(id).toBeDefined();
  //   });
  // });

  it("shows modal", () => {
    wrapper.setState(() => {
      wrapper.instance().showModal();
      const visible = wrapper.state("visible");
      expect(visible).toBe(true);
    });
  });

  it("handles return", () => {
    wrapper.setState(() => {
      wrapper.instance().handleReturn();
      const visible = wrapper.state("visible");
      expect(visible).toBe(false);
    });
  });

  // it("handles purchased", () => {
  //   wrapper.setState(() => {
  //     wrapper.instance().handlePurchased();
  //     const visible = wrapper.state("visible");
  //     const purchased = wrapper.state("purchased");
  //     expect(visible).toBe(false);
  //     expect(purchased).toBe("true");
  //   });
  // });

  it("handles after purchase", () => {
    wrapper.setState(() => {
      wrapper.instance().handleAfterPurchase();
      const visible = wrapper.state("visible");
      const purchased = wrapper.state("purchased");
      expect(visible).toBe(false);
      expect(purchased).toBe("false");
    });
  });
});
