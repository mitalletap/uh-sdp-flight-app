import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import PageNotFound from "../../pages/404";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });
  it("should contain div", () => {
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
  it("should contain h1", () => {
    const text = wrapper.find("h1");
    expect(text.text()).toBe(" 404 Page Not Found ");
  });
});
