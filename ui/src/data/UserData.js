import React, { Component } from "react";

class UserData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      signedIn: false
    };
  }

  getUserData = object => {
    console.log(object);
  };

  render() {
    const currentSession = Auth.currentAuthenticatedUser()
      .then(user => setUsername(user.attributes.email))
      .catch(err => console.log(err));

    return <div> {this.getUserData} </div>;
  }
}

export default UserData;

// const [username, setUsername] = useState(null);
// // const currentUser = Auth.currentSession();
// const currentSession = Auth.currentAuthenticatedUser()
//     .then(user => setUsername(user.attributes.email))
//     //.then(user => console.log(user))
//     .catch(err => console.log(err));
