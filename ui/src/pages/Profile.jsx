import React, { useState, Component } from "react";
import NavigationBar from "../components/NavigationBar";
import FlightSearch from "../components/FlightSearch";
import { Container, Header, Footer, Content, Toggle, Avatar } from "rsuite";

// AWS
import { Auth } from "aws-amplify";

const Profile = () => {
  const [username, setUsername] = useState(null);
  // const currentUser = Auth.currentSession();
  const currentSession = Auth.currentAuthenticatedUser()
    .then(user => setUsername(user.attributes.email))
    //.then(user => setUsername(user.attributes.phone_number))
    .catch(err => console.log(err));

  return (
    <React.Fragment>
      <Container>
        <Header>
          <NavigationBar />
        </Header>
        <Content>
          <h1> Welcome to your profile {username} </h1>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Profile;

/*
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    phone_number: ''
  });
  // const currentUser = Auth.currentSession();
  const currentSession = Auth.currentAuthenticatedUser()
    .then(user => setUserData({
      email: user.attributes.email,
      username: user.attributes.email,
      phone_number: user.attributes.phone_number
    }))
    //.then(user => console.log(user))
    .catch(err => console.log(err));

    */
