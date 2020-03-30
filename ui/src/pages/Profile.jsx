import React, { useState, useEffect } from "react";
import { Divider, Avatar } from "antd";
import { Auth } from "aws-amplify";

const Profile = () => {
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);
  const [name, setName] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then(
        data => (
          setUsername(data.username),
          setPhone(data.attributes.phone_number),
          setEmail(data.attributes.email),
          setName(data.attributes.name)
        )
      )
      .catch(err => console.log(err));
  });

  return (
    <React.Fragment>
      <div
        style={{
          borderStyle: "double",
          padding: "100px",
          backgroundColor: "rgba(255,255,255, .8)",
          height: "100%",
          width: "50%",
          textAlign: "center",
          left: "50%",
          top: "50%",
          transform: "translateX(50%) translateY(10%)"
        }}
      >
        <Divider>
          <Avatar
            size={100}
            src="https://ya-webdesign.com/images250_/avatar-png-1.png"
          />
        </Divider>

        <div className="header">
          <h1> Welcome {name} </h1>
        </div>
        <div className="information">
          <br />
          <div className="name">
            <div style={{ float: "left", paddingLeft: "50px" }}>
              <p> Name: </p>
            </div>
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <p> {name} </p>
            </div>
          </div>
          <br />
          <div className="username">
            <div style={{ float: "left", paddingLeft: "50px" }}>
              <p> Username: </p>
            </div>
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <p> {username} </p>
            </div>
          </div>
          <br />
          <div className="email">
            <div style={{ float: "left", paddingLeft: "50px" }}>
              <p> Email: </p>
            </div>
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <p> {email} </p>
            </div>
          </div>
          <br />
          <div className="phone">
            <div style={{ float: "left", paddingLeft: "50px" }}>
              <p> Phone: </p>
            </div>
            <div style={{ textAlign: "right", paddingRight: "50px" }}>
              <p> {phone} </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
