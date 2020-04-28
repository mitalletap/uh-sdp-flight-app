import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Amplify from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
import Home from "./pages/Home";
import FlightSelection from "./pages/FlightSelection";
import Data from "./pages/Data";
import Profile from "./pages/Profile";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import "./App.css";
import planeImg1 from "./images/Plane1.jpg";
import awsconfig from "./aws-exports";

export const history = createBrowserHistory();

const signUpConfig = {
  header: "My Customized Sign Up",
  hideAllDefaults: false,
  defaultCountryCode: "1",
  signUpFields: [
    {
      label: "Name",
      key: "name",
      required: true,
      displayOrder: 1,
      type: "string"
    }
  ]
};

Amplify.configure(awsconfig);

export function App() {
  const backgroundImage = planeImg1;

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        resize: "both",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <NavBar />
      <Router className="router">
        <Switch className="switch">
          <Route
            className="flightSelectionRoute"
            exact
            path="/"
            render={props => <FlightSelection {...props} />}
          />
          <Route exact path="/planner" render={props => <Data {...props} />} />
          <Route exact path="/logout" render={props => <Home {...props} />} />
          <Route
            exact
            path="/profile"
            render={props => <Profile {...props} />}
          />
          <Route exact path="/about" render={props => <About {...props} />} />
          <Route component={PageNotFound} />{" "}
        </Switch>
      </Router>
    </div>
  );
}

export default withAuthenticator(App, { signUpConfig });
