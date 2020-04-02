import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.jsx";
import FlightSelection from "./pages/FlightSelection.jsx";
import Data from "./pages/Data.jsx";
import Profile from "./pages/Profile.jsx";
import PageNotFound from "./pages/404";
import About from "./pages/About";
import NavBar from "./components/NavBar.jsx";
import "./App.css";
import planeImg1 from "./images/Plane1.jpg";
import planeImg2 from "./images/Plane2.jpg";
import planeImg3 from "./images/Plane3.jpg";
import planeImg4 from "./images/Plane4.jpg";
import planeImg5 from "./images/Plane5.jpg";
import { createBrowserHistory } from "history";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { withAuthenticator } from "aws-amplify-react";

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

function App() {
  console.log(window.location.pathname);
  var backgroundImage = planeImg5;
  switch (window.location.pathname) {
    case "/":
      backgroundImage = planeImg2;
      break;
    case "/planner":
      backgroundImage = planeImg1;
      break;
    case "/about":
      backgroundImage = planeImg3;
      break;
    case "/profile":
      backgroundImage = planeImg5;
      break;
    default:
      backgroundImage = planeImg4;
  }
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
        </Switch>{" "}
      </Router>{" "}
    </div>
  );
}

//export default App;
export default withAuthenticator(App, { signUpConfig });
