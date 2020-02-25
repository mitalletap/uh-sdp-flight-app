// Imports
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import planeImg from "./images/Plane2.jpg";

import NavigationBar from "./components/NavigationBar";

// Pages
import Home from "./pages/Home.jsx";
import FlightSelection from "./pages/FlightSelection.jsx";
import Data from "./pages/Data.jsx";
import Profile from "./pages/Profile.jsx";
import PageNotFound from "./pages/404";

import Card from "./pages/Card.jsx";

import "./App.css";

function App() {
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

          <Route exact path="/card" component={Card} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

/*
<Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/flight-selection" component={FlightSelection} />
          <Route exact path="/data" component={Data} />
          <Route path="/404" component={PageNotFound} />
          <Redirect to="/404/" />
        </Switch>

        */
