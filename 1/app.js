import React from "react";
import ReactDOM from "react-dom/client";

//react element
const heading = React.createElement("h1", { id: "heading" }, "namaste react🦋");

console.log(heading);

//jsx
const jsxheading = <h1 id="heading">namaste react🦋 using jsx</h1>;

console.log(jsxheading);


// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(jsxheading);
// onst parent = React.createElement(
//     "div",
//     { id: "parent" },
//     React.createElement("div", { id: "child" }, [
//       React.createElement("h1", {}, "this is namaste react practice🚀"),
//       React.createElement("h2", {}, "I'm an h2 tag"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//       React.createElement("h1", {}, "I'm an h1 tag"),
//       React.createElement("h2", {}, "I'm an h2 tag"),
//     ])
//   );
  
//   const heading = React.createElement(
//     "h1",
//     { id: "heading", xyz: "abc" },
//     "Hello from React"
//   );
  
//   const root = ReactDOM.createRoot(document.getElementById("root"));
//   root.render(parent);