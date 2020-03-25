import React, { useState } from "react";
import { Container, Content } from "rsuite";

// AWS
import { Auth } from "aws-amplify";

const Profile = () => {
  const [username, setUsername] = useState(null);
  Auth.currentAuthenticatedUser()
    .then(user => setUsername(user.attributes.email))
    .catch(err => console.log(err));

  return (
    <React.Fragment>
      <Container>
        <Content>
          <h1> Welcome to your profile {username} </h1>
        </Content>
      </Container>
    </React.Fragment>
  );
};

export default Profile;
