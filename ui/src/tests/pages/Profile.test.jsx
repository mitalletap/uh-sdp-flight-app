import React from "react";
import Profile from "../../pages/Profile";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import { Container, Content } from "rsuite";
import { render, getByTestId } from "@testing-library/react";
import { Auth } from "aws-amplify";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Profile />);
  });

  // Expects to find the Container containing all Elements
  it("should contain container", () => {
    expect(wrapper.find(Container)).toBeDefined();
  });

  // Expects to find the Content containing all Elements
  it("should contain content", () => {
    expect(wrapper.find(Content)).toBeDefined();
  });

  it("expect username", async () => {
    const data = await Auth.currentAuthenticatedUser()
      .then(user => setUsername(user.attributes.email))
      .catch(err => console.log(err));
    expect(data).toBeUndefined();
  });
});
