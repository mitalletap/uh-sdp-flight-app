// Imports
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import planeImg from "./images/Plane2.jpg";

// Pages
import Home from "./pages/Home.jsx";
import FlightSelection from "./pages/FlightSelection.jsx";
import Data from "./pages/Data.jsx";
import Profile from "./pages/Profile.jsx";
import PageNotFound from "./pages/404";
import Card from "./pages/Card.jsx";

// CSS
import "./App.css";

// AWS
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import { Auth } from "aws-amplify";
import { withAuthenticator } from "aws-amplify-react";
Amplify.configure(awsconfig);

function App() {
  // AWS Pool Data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const poolData = {
    UserPoolId: "us-east-2_S2FwnCKiO",
    ClientId: "5r6disd2l9k8kbnhu8qu6f5rn3"
  };
  const UserPool = new CognitoUserPool(poolData);

  // Modal Hook
  const [show, setShow] = useState(true);
  // const currentSession = Auth.currentAuthenticatedUser()
  //   .then(user => setEmail(user.attributes.email))
  //   .catch(err => console.log(err));

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${planeImg})`,
        resize: "both",
        height: "100vh",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat"
      }}
    >
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flight-search" component={FlightSelection} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/logout" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/card" component={Card} />
          <Route exact path="/404" component={PageNotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
//export default withAuthenticator(App);
