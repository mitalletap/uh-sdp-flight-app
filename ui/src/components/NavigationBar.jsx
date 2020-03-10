// Imports
import React, { useState, Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";
import { Navbar, Icon, Nav, Badge } from "rsuite";

// Styles
import "rsuite/dist/styles/rsuite-default.css";

// Pages
import Home from "../pages/Home.jsx";
import FlightSelection from "../pages/FlightSelection";
import Data from "../pages/Data";
import PageNotFound from "../pages/404.jsx";
import { Auth } from "aws-amplify";

class NavigationBar extends Component {
  render() {
    const signoutFunction = () => {
      Auth.signOut()
        .then(data => console.log(data))
        .catch(err => console.log(err));
    };
    return (
      <Navbar>
        <Navbar.Body>
          <Nav>
            <Link to={"/"}>
              <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            </Link>
            <Link to={"/flight-search"}>
              <Nav.Item icon={<Icon icon="plane" />}> Search Flights</Nav.Item>
            </Link>
            <Link to={"/data"}>
              <Nav.Item icon={<Icon icon="calendar" />}>Planner</Nav.Item>
            </Link>
          </Nav>
          <Nav pullRight>
            <Link to={"/logout"}>
              <Nav.Item
                icon={<Icon icon="cog" />}
                onClick={signoutFunction}
              ></Nav.Item>
            </Link>
            <Badge content={"1"}>
              <Link to={"/profile"}>
                <Nav.Item icon={<Icon icon="user" />}></Nav.Item>
              </Link>
            </Badge>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}

export default NavigationBar;
