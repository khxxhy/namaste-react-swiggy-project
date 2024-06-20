import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement("h1", { id: "heading" }, "namaste react🦋");

console.log(heading);

//jsx
const jsxheading = <h1 id="heading">namaste react🦋 using jsx</h1>;

console.log(jsxheading);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxheading);
