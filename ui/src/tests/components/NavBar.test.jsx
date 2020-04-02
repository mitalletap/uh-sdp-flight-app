import React from "react";
import Adapter from "enzyme-adapter-react-16";
import Enzyme, { shallow } from "enzyme";
import NavBar from "../../components/NavBar";
import { Auth } from "aws-amplify";

Enzyme.configure({ adapter: new Adapter() });
describe("react testing", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavBar />);
  });

  it("expect username", async () => {
    const data = await Auth.signOut()
      .then(user => setUsername(user.attributes.email))
      .catch(err => console.log(err));
    expect(data).toBeUndefined();
  });
});
