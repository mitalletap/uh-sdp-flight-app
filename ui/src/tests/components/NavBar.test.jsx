import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Auth } from "aws-amplify";
import NavBar from "../../components/NavBar";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("signout signsout", () => {
    expect(Auth.signOutCalled).toBe(false);
    wrapper.find("#signoutnav").simulate("click");
    expect(Auth.signOutCalled).toBe(true);
  });
});
