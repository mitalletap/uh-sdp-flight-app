import React, { Component } from "react";
import { Navbar, Icon, Nav, Badge } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
      <Navbar>
        <Navbar.Body>
          <Nav>
            <Nav.Item icon={<Icon icon="home" />}>Home</Nav.Item>
            <Nav.Item icon={<Icon icon="plane" />}> Search Flights </Nav.Item>
            <Nav.Item icon={<Icon icon="calendar" />}> Planner </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Item icon={<Icon icon="cog" />}></Nav.Item>
            <Badge content={"1"}>
              <Nav.Item icon={<Icon icon="user" />}> </Nav.Item>
            </Badge>
          </Nav>
        </Navbar.Body>
      </Navbar>
    );
  }
}

export default NavigationBar;
