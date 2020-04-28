import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import "rsuite/lib/styles/index.less";
import moment from "moment";
import { DateRangePicker, Button, InputGroup, InputPicker } from "rsuite";
import FlightSearch from "../../components/FlightSearch";

Enzyme.configure({ adapter: new Adapter() });

describe("authentication testing", () => {
  let component;

  beforeEach(() => {
    component = new FlightSearch();
    component.setState = function(state) {
      this.state = { ...this.state, ...state };
    };
  });

  it("componentDidMount sets username to email", () => {
    component.componentDidMount();

    return new Promise((resolve, reject) => {
      setImmediate(() => {
        expect(component.state.userName).toBe("sample@example.com");

        resolve();
      });
    });
  });

  it("should contain input picker", () => {
    expect(InputPicker).toBeDefined();
  });

  it("should contain input group", () => {
    expect(InputGroup).toBeDefined();
  });

  it("should contain date range picker", () => {
    expect(DateRangePicker).toBeDefined();
  });

  it("should contain button", () => {
    expect(Button).toBeDefined();
  });
});

describe("state testing", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);

    component = new FlightSearch();
    component.setState = function(state) {
      this.state = { ...this.state, ...state };
    };
  });

  it("handles number of passengers", () => {
    const props = 2;
    wrapper.setState(() => {
      wrapper.instance().handleNumOfPassengers(props);
      const userState = wrapper.state("numOfPassengers");
      expect(userState).toEqual(2);
    });
  });

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

  it("handles not null date", () => {
    const props = [
      moment("2019-10-31T12:34:56"),
      moment("2023-10-31T12:34:56")
    ];
    component.handleDate(props);
    expect(component.state.departDate).toBe("2019-10-31");
    expect(component.state.arriveDate).toBe("2023-10-31");
  });

  it("handles null start", () => {
    const props = null;
    wrapper.setState(() => {
      wrapper.instance().handleStart(props);
      const departState = wrapper.state("departDate");
      expect(departState).toEqual(null);
    });
  });

  it("handles not null start", () => {
    component.handleStart(moment("2019-10-31T12:34:56"));
    expect(component.state.departDate).toBe("2019-10-31");
  });

  it("handles one way", () => {
    const props = true;
    wrapper.setState(() => {
      wrapper.instance().handleisOneWay(props);
      const rt = wrapper.state("isRoundTrip");
      expect(rt).toBe(true);
    });
  });

  it("handles origin", () => {
    const props = [
      {},
      {
        airport: "Bush Airport",
        city: "Houston",
        state: "Texas",
        country: "USA",
        key: "1"
      }
    ];

    wrapper.setState(() => {
      wrapper.instance().handleOrigin(...props);
    });

    component.handleOrigin(...props);
    expect(component.state.origin).toBe("Bush Airport");
    expect(component.state.originCity).toBe("Houston");
    expect(component.state.originState).toBe("Texas");
    expect(component.state.originCountry).toBe("USA");
    expect(component.state.originCode).toBe("1");
  });

  it("handles destination", () => {
    const props = [
      {},
      {
        airport: "Bush Airport",
        city: "Houston",
        state: "Texas",
        country: "USA",
        key: "1"
      }
    ];

    wrapper.setState(() => {
      wrapper.instance().handleDestination(...props);
    });

    component.handleDestination(...props);
    expect(component.state.destination).toBe("Bush Airport");
    expect(component.state.destinationCity).toBe("Houston");
    expect(component.state.destinationState).toBe("Texas");
    expect(component.state.destinationCountry).toBe("USA");
    expect(component.state.destinationCode).toBe("1");
  });

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

  it("handles purchased", () => {
    wrapper.setState(() => {
      wrapper.instance().handlePurchased();
      const visible = wrapper.state("visible");
      const purchased = wrapper.state("purchased");
      expect(visible).toBe(false);
      expect(purchased).toBe("true");
    });
  });

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

describe("handle save to planner", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);
  });

  it("should api call for posting reserved flights", async () => {
    wrapper.setState({
      direct: true,
      userName: "mitalletap",
      price: 18,
      carrierIds: "",
      outboundDepartureDate: "2019-10-31",
      inboundDepartureDate: "2019-10-31",
      origin: {
        originId: 123,
        originIataCode: 45,
        originName: "Houston",
        originCityName: "Houston",
        originCityId: 678
      },
      destination: {
        destinationId: 321,
        destinationIataCode: 54,
        destinationName: "Atlanta",
        destinationCityName: "Atlanta",
        destinationCityId: 876
      },
      outboundCarrier: {
        carrierId: 123,
        name: "Frontier"
      },
      inboundCarrier: {
        carrierId: 321,
        name: "Spirit"
      },
      purchased: true
    });
    const purchasedState = wrapper.state("purchased");

    return fetch(
      `http://localhost:8080/api/post-reserved-flight?purchased=${purchasedState}`
    )
      .then(res => res.json())
      .catch(err => console.log());
  });
});

describe("handles moment.js", () => {
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = shallow(<FlightSearch />);

    component = new FlightSearch();
  });

  it("checks the disabled date", () => {
    const test = component.disabledDate("2019-10-31");
    expect(test).toBe(false);
  });

  it("checks complete data", () => {
    const props1 = [
      {
        departDate: "2019-10-31",
        destination: "Houston",
        origin: "Texas",
        isRoundTrip: false,
        status: false
      }
    ];
    component.checkCompleteData(props1);
    expect(props1.status).toBe(true);
  });

  it("checks the one way status", () => {
    wrapper.setState({
      isRoundTrip: false
    });
    expect(wrapper.state("isRoundTrip")).toBe(false);
  });

  it("checks conditional rendering", () => {
    wrapper.setState({
      visible: true,
      price: -1,
      arriveDate: "",
      originCity: "Houston"
    });
  });
});
