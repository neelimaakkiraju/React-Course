const parent = React.createElement("div", {}, React.createElement("div", {
    id: "parent"
}, React.createElement("h1", {}, "I'm h1 tag")), React.createElement("h2", {
    id: "child"
}, "I'm h1 tag"), React.createElement("p", {
    id: "child"
}, "Pragraph created"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
