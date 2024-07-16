import React from "react";
import ReactDOM from "react-dom/client"
const parent = React.createElement("div" , {} , 
    React.createElement("div" , {id : "parent"} , React.createElement("h1" , {} , "I'm h1 tag")),
    React.createElement("h2" , {id : "child"} , "I'm an h3 tag") ,
    React.createElement("p" , {id : "child"} , "Pragraph created")
)

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(parent);