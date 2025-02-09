import UserComponent from "./UserClass";

import User from "./User";
import UserContext from "../utils/userContext";
import { useState } from "react";

About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <div className="about">
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
        <UserComponent
          name={"Neelima"}
          location={"India"}
          contact={"776734589"}
        />
      </div>
    </div>
  );
};
export default About;


