import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { configure, shallow } from "enzyme";
import FlightSearch from "../../components/FlightSearch";
import "rsuite/lib/styles/index.less";
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

describe("snapshot testing for flight-search", () => {
  let wrapper;
  let mockChange;

  beforeEach(() => {
    mockChange = jest.fn();
    wrapper = shallow(<FlightSearch />);
  });

  it("should match snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});

describe("state testing for flight-search", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);
  });

  it("should call setState on numOfPassengers", () => {
    const state = {
      numOfPassengers: 1
    };
    wrapper.setState({ state }, userState => {
      wrapper.instance().handleNumOfPassengers();
      expect(userState).toEqual(undefined);
    });
  });

  it("should call setState on depart-date and arrive-date", () => {
    const state = {
      departDate: "",
      arriveDate: ""
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleDate());
      expect(userState).toEqual(undefined);
    });
  });

  it("should call setState on depart-date", () => {
    const state = {
      departDate: ""
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleStart());
      wrapper.instance().handleStart();
      expect(userState).toEqual(undefined);
    });
  });

  it("should call setState on is-one-way", () => {
    const state = {
      isRoundTrip: false
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleisOneWay());
      expect(userState).toBe(true);
    });
  });

  it("should call setState on origin", () => {
    const state = {
      origin: ""
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleOrigin());
      expect(userState).toBeDefined();
    });
  });

  it("should call setState on destination", () => {
    const state = {
      isRoundTrip: false
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleisOneWay());
      expect(userState).toBeDefined();
    });
  });

  it("should call setState on show-modal", () => {
    const state = {
      visible: false
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().showModal());
      expect(userState).toBe(true);
    });
  });

  it("should call setState on handle-return", () => {
    const state = {
      visible: true
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleReturn());
      expect(userState).toBe(false);
    });
  });

  it("should call setState on handle-purchased", () => {
    const state = {
      visible: true,
      purchased: false
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handlePurchased());
      expect(userState).toBeDefined();
    });
  });

  it("should call setState on handle-after-purchase", () => {
    const state = {
      visible: true,
      purchased: true
    };

    wrapper.setState({ state }, userState => {
      console.log(wrapper.instance().handleAfterPurchase());
      expect(userState).toBeDefined();
    });
  });
});
