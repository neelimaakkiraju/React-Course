import React from "react";
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1" , {id: "heading"}, "Hello World From React JS");

const NewComponent2 = () => (
    <h1>New component</h1>
)
const NewComponent = () => (
    <div>
         <h1>New Functional component</h1>
         <NewComponent2/>
    </div>
)
const jsxHeading = <h1>hello world from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<NewComponent/>) 