import React from "react";
import CardDisp from "../../components/CardDisp";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("card-disp testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<CardDisp arriveDate={"test"} />);
  });

  it("should contain props", () => {
    expect(wrapper.props()).toBeDefined();
  });
});
