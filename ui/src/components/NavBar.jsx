// Imports
import React from "react";
import { Nav, Navbar, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import { Auth } from "aws-amplify";

const NavBar = () => {
  const signoutFunction = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };

  const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return <a href={href} {...rest} />;
  });
  const NavLink = props => <Nav.Item componentClass={MyLink} {...props} />;
  const instance = (
    <Navbar>
      <Navbar.Body>
        <Nav>
          <NavLink href="/" icon={<Icon icon="plane" />}>
            {" "}
            Search Flights
          </NavLink>
          <NavLink href="/planner" icon={<Icon icon="calendar" />}>
            {" "}
            Calendar{" "}
          </NavLink>
          <NavLink href="/about" icon={<Icon icon="peoples" />}>
            {" "}
            About{" "}
          </NavLink>
        </Nav>
        <Nav pullRight>
          <NavLink
            href="/"
            icon={<Icon icon="cog" />}
            onClick={signoutFunction}
          >
            {" "}
            Logout
          </NavLink>
          <NavLink href="/profile" icon={<Icon icon="user" />}>
            {" "}
            Profile{" "}
          </NavLink>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
  return instance;
};

export default NavBar;
