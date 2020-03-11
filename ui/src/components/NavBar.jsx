// Imports
import React from "react";
import { Nav } from "rsuite";

// Styles
import "rsuite/dist/styles/rsuite-default.css";

// Pages
import { Auth } from "aws-amplify";

const NavBar = () => {
  // const signoutFunction = () => {
  //   Auth.signOut()
  //     .then(data => console.log(data))
  //     .catch(err => console.log(err));
  // };

  const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return <a href={href} {...rest} />;
  });
  const NavLink = props => <Nav.Item componentClass={MyLink} {...props} />;
  const instance = (
    <Nav appearance={"default"}>
      <NavLink href="/">Home</NavLink>
      <NavLink href="/flight-search">Flight Search</NavLink>
      <NavLink href="/data">Data</NavLink>
      <NavLink href="/logout">Logout</NavLink>
      <NavLink href="/profile">Profile</NavLink>
    </Nav>
  );
  return instance;
};

export default NavBar;
