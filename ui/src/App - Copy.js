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
import { Modal, Button, Alert } from "rsuite";

import ModalBody from "rsuite/lib/Modal/ModalBody";

// Pages
import Home from "./pages/Home.jsx";
import FlightSelection from "./pages/FlightSelection.jsx";
import Data from "./pages/Data.jsx";
import Profile from "./pages/Profile.jsx";
import PageNotFound from "./pages/404";

// CSS
import "./App.css";

// AWS
import { CognitoUserPool } from "amazon-cognito-identity-js";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
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

  return (
    <Router>
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
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flight-search" component={FlightSelection} />
          <Route exact path="/data" component={Data} />
          <Route exact path="/logout" component={Home} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/404" component={PageNotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, true);

{
  /* <form onSubmit={onSubmit}>
          <input
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
          <input
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <button type='submit'> signup </button>
        </form> */
}

// const onSubmit = event => {
//   event.preventDefault();
//   UserPool.signUp(email, password, [], null, (err, data) => {
//     if (err)
//       console.log(err);
//       console.log(err.message);
//     console.log(data);
//   });
// }
