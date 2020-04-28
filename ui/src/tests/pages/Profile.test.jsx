import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Container, Content } from "rsuite";
import Profile from "../../pages/Profile";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  it("should contain container", () => {
    expect(wrapper.find(Container)).toBeDefined();
  });

  it("should contain content", () => {
    expect(wrapper.find(Content)).toBeDefined();
  });
});
