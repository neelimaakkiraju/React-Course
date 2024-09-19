import React from "react";
import ReactDOM from "react-dom/client";
import BodyComponent from "./src/components/Body";
import HeadComponent from "./src/components/Header";






const AppLayout = () => {
  return (
    <div className="app">
      <HeadComponent />
      <BodyComponent />
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
