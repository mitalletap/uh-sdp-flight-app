import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import fetchMock from "fetch-mock";
import Planner from "../../components/Planner";

Enzyme.configure({ adapter: new Adapter() });

describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Planner />);
  });

  it("should contain container", () => {
    expect(wrapper.find("div")).toBeDefined();
  });
});

describe("no data from api", () => {
  let wrapper;
  let component;
  beforeEach(() => {
    wrapper = shallow(<Planner />);
    component = new Planner();
  });

  it("find ul elements", () => {
    expect(wrapper.state.data).toBe(undefined);
    expect(wrapper.find(".emptyCardList")).toBeTruthy();
  });

  it("gets API data", () => {
    component.componentDidMount();
    component.setState({ userName: "mitalletap1998@gmail.com" });
    component.getPlanner();
  });
});

describe("data from api", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });
  let wrapper;
  beforeEach(() => {
    fetchMock.reset();
    wrapper = shallow(<Planner />, { disableLifecycleMethods: true });
    wrapper.setState({
      userName: "mitalletap1998@gmail.com",
      data: [
        {
          id: "5e827e66b61bbd5e455b1a88",
          direct: false,
          price: 13.0,
          userName: "mitalletap1998@gmail.com",
          origin: {
            originId: 58440,
            originCityName: "Houston",
            originIataCode: "IAH",
            originCityId: "HOUA",
            originName: "George Bush Intercontinental"
          },
          destination: {
            destinationName: "William B Hartsfield-Atlanta Intl",
            destinationCityName: "Atlanta",
            destinationCityId: "ATLA",
            destinationIataCode: "ATL",
            destinationId: 40924
          },
          outboundDepartureDate: "2020-04-10",
          inboundDepartureDate: "",
          outboundCarrier: { name: "Spirit Airlines", carrierId: 1467 },
          inboundCarrier: { name: null, carrierId: null },
          purchased: true
        }
      ]
    });
  });
  afterEach(() => {
    wrapper.unmount();
  });

  jest.useFakeTimers();
  it("should get url", () => {
    expect(setTimeout).toHaveBeenCalled();
  });

  it("should find card", () => {
    expect(wrapper.state("data").length).toBe(1);
  });

  it("should check state value", () => {
    expect(wrapper.state("userName")).toBe("mitalletap1998@gmail.com");
  });

  it("something", async () => {
    fetchMock.mock(
      "http://localhost:8080/api/get-users-reserved-flights?userName=mitalletap1998@gmail.com",
      200
    );
    const res = await fetch(
      "http://localhost:8080/api/get-users-reserved-flights?userName=mitalletap1998@gmail.com"
    );
    expect(res.status).toBe(200);
    fetchMock.restore();
  });
});

describe("conditional rendering", () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Planner />);
  });

  it("should check conditional rendering", () => {
    wrapper.setState({ data: [] });
    expect(wrapper.state("data").length).toBe(0);
  });

  it("should check conditional rendering", () => {
    const mockData = {
      id: "5e827e66b61bbd5e455b1a88",
      direct: false,
      price: 13.0,
      userName: "mitalletap1998@gmail.com",
      origin: {
        originId: 58440,
        originCityName: "Houston",
        originIataCode: "IAH",
        originCityId: "HOUA",
        originName: "George Bush Intercontinental"
      },
      destination: {
        destinationName: "William B Hartsfield-Atlanta Intl",
        destinationCityName: "Atlanta",
        destinationCityId: "ATLA",
        destinationIataCode: "ATL",
        destinationId: 40924
      },
      outboundDepartureDate: "2020-04-10",
      inboundDepartureDate: "",
      outboundCarrier: { name: "Spirit Airlines", carrierId: 1467 },
      inboundCarrier: { name: null, carrierId: null },
      purchased: true
    };
    wrapper.setState({ data: [mockData], received: true });
    expect(wrapper.state("data").length).not.toBe(0);
  });
});
