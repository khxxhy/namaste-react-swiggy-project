import React from "react";
import ReactDOM from "react-dom/client";

// react element
// const heading = React.createElement("h1", { id: "heading" }, "namaste react🦋");
// console.log(heading);

//React Element
const heading = (
  <h1 id="heading" tabIndex="5">
    this is a react element 🦋
  </h1>
);

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    <Title /> 
    <h1>{number}</h1>
    {heading}
    <h1 className="heading">This is a react functional component 🦋</h1>
  </div>
); 

// can also be written in this syntax (in a single line) ->
const Title = () => <div id="container"> <h1 className="heading"> This is a react component 🦋</h1> </div>

const number = 10000;

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(heading); //redering an element
root.render(<HeadingComponent />); //rendering a component

//const parent = React.createElement(
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
