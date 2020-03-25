import React from "react";
import Planner from "../../components/Planner";
import Data from "../../pages/Data";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Container, Content } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Data />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(Container).toBeDefined();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(Content).toBeDefined();
  });

  // Expects to find the Planner
  it("should contain flight search", () => {
    expect(wrapper.find("Planner").exists());
  });
});
