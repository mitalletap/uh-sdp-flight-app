import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import Planner from "../../components/Planner";
import MyCard from "../../components/DataCard";
import fetchMock from "fetch-mock";

Enzyme.configure({ adapter: new Adapter() });

describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Planner />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(wrapper.find("div")).toBeDefined();
  });
});

describe("no data from api", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Planner />);
  });

  it("find ul elements", () => {
    expect(wrapper.state.data).toBe(undefined);
    expect(wrapper.find(".emptyCardList")).toBeTruthy();
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

  it("soemthing", async () => {
    fetchMock.mock(
      "http://localhost:8080/api/get-users-reserved-flights?userName=mitalletap1998@gmail.com",
      200
    );
    const res = await fetch(
      "http://localhost:8080/api/get-users-reserved-flights?userName=mitalletap1998@gmail.com"
    );
    console.log(res);
    expect(res.status).toBe(200);
    fetchMock.restore();
  });
});
