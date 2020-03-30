import React from "react";
import PageNotFound from "../../pages/404";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PageNotFound />);
  });

  // Expects to find the div containing all Elements
  it("should contain div", () => {
    expect(wrapper.find("div").exists()).toBeTruthy();
  });
  // Expects to find the h1 tag and its content
  it("should contain h1", () => {
    const text = wrapper.find("h1");
    expect(text.text()).toBe(" 404 Page Not Found ");
  });
});
