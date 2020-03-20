// npm run test:coverage

import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import NavBar from "../../components/NavBar";
import { Nav } from "rsuite";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  // Expects to find the nav containing all Elements
  it("should contain nav", () => {
    expect(wrapper.find(Nav).exists());
  });
});
