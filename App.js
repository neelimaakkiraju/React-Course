import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1" , {id: "heading"}, "Hello World From React JS");

const jsxHeading = <h1>hello world from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading) 