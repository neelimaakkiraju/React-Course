import React from "react";
import { useState } from "react";

const User = ({name,location,contact}) => {

const [count] = useState([0])
    return(
        <div>
               <h1>Functional Component</h1>
               <h1>Count:{count}</h1>
                <h2>Name:{name}</h2>
                <h2>Location: {location}</h2>
                <h2>Contact:{contact}</h2>
            </div>
    )
}

export default User