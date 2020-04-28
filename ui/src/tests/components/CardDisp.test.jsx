import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import CardDisp from "../../components/CardDisp";

Enzyme.configure({ adapter: new Adapter() });
describe("card-disp testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardDisp arriveDate="test" />);
  });

  it("should contain props", () => {
    expect(wrapper.props()).toBeDefined();
  });
});
