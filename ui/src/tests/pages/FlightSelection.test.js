import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Container, Content } from "rsuite";
import FlightSearch from "../../components/FlightSearch";
import FlightSelection from "../../pages/FlightSelection";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<FlightSelection />);
  });

  it("should contain container", () => {
    expect(Container).toBeDefined();
  });

  it("should contain content", () => {
    expect(Content).toBeDefined();
  });

  it("should contain flight search", () => {
    expect(wrapper.find(<FlightSearch />).exists());
  });
});
