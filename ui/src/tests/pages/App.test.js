import React from "react";
import Enzyme, { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  MemoryRouter
} from "react-router-dom";
import { createBrowserHistory } from "history";
import { render } from "@testing-library/react";

import App from "../../App";
import Home from "../../pages/Home.jsx";
import FlightSelection from "../../pages/FlightSelection.jsx";
import Data from "../../pages/Data.jsx";
import Profile from "../../pages/Profile.jsx";
import PageNotFound from "../../pages/404";
import Card from "../../pages/Card";
import NavBar from "../../components/NavBar";

Enzyme.configure({ adapter: new Adapter() });
describe("app", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders app", () => {
    expect(App).toBeDefined();
    const tree = shallow(<App />);
    expect(tree).not.toBeNull();
  });

  it("find div", () => {
    var div = wrapper.find("div").exists();
    expect(div).toBe(true);
  });

  it("render flight selection", () => {
    const tree = shallow(<FlightSelection />);
    expect(tree).not.toBeNull();
  });

  // it('tests link change to "/"', () => {
  //   wrapper = mount(
  //     <MemoryRouter initialEntries={["/"]}>
  //       <Switch>
  //         <Route
  //           exact
  //           path="/"
  //           render={props => <FlightSelection {...props} />}
  //         />
  //         <Route exact path="/planner" render={props => <Data {...props} />} />
  //         <Route exact path="/logout" render={props => <Home {...props} />} />
  //         <Route
  //           exact
  //           path="/profile"
  //           render={props => <Profile {...props} />}
  //         />
  //         <Route exact path="/card" render={props => <Card {...props} />} />
  //         <Route component={PageNotFound} />
  //       </Switch>
  //     </MemoryRouter>
  //   );
  //   expect(wrapper.find("Route").prop("location").pathname).toBe("/");
  // });

  it("test", () => {
    wrapper = shallow(
      <Route exact path="/" render={props => <FlightSelection {...props} />} />
    );
    expect(wrapper.props()).toBeDefined();
  });
});
