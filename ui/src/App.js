// Imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import planeImg from "./images/Plane2.jpg";
import { createBrowserHistory } from "history";
// Pages
import Home from "./pages/Home.jsx";
import FlightSelection from "./pages/FlightSelection.jsx";
import Data from "./pages/Data.jsx";
import Profile from "./pages/Profile.jsx";
import PageNotFound from "./pages/404";
import Card from "./pages/Card";

import NavBar from "./components/NavBar.jsx";
// CSS
import "./App.css";

//AWS
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";

export const history = createBrowserHistory();
const location = history.location;

Amplify.configure(awsconfig);

function App() {
  // AWS Pool Data
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const poolData = {
  //   UserPoolId: "us-east-2_S2FwnCKiO",
  //   ClientId: "5r6disd2l9k8kbnhu8qu6f5rn3"
  // };
  // const UserPool = new CognitoUserPool(poolData);

  // // Modal Hook
  // const [show, setShow] = useState(true);
  // const currentSession = Auth.currentAuthenticatedUser()
  //   .then(user => setEmail(user.attributes.email))
  //   .catch(err => console.log(err));

  const unlisten = history.listen((location, action) => {
    // location is an object like window.location
    console.log(action, location.pathname, location.state);
  });
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${planeImg})`,
        resize: "both",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <NavBar />
      <Router>
        <Switch>
          <Route
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
          <Route exact path="/card" render={props => <Card {...props} />} />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

//export default App;
export default withAuthenticator(App, false);
