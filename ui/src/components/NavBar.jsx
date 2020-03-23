// Imports
import React from "react";
import { Nav, Navbar, Icon } from "rsuite";

// Styles
import "rsuite/dist/styles/rsuite-default.css";

// Pages
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
          <NavLink href="/" icon={<Icon icon="plane" />}></NavLink>
          <NavLink href="/planner" icon={<Icon icon="calendar" />}></NavLink>
        </Nav>
        <Nav pullRight>
          <NavLink
            href="/logout"
            icon={<Icon icon="cog" />}
            onClick={signoutFunction}
          ></NavLink>
          <NavLink href="/profile" icon={<Icon icon="user" />}></NavLink>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
  return instance;
};

export default NavBar;
