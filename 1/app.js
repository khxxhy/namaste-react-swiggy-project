import React from "react";
import ReactDOM from "react-dom/client";

const parent =  React.createElement(
    "div",
    {id: "parent"},[
    React.createElement("div",
    {id: "child"},[
    React.createElement("h1", {}, "hellloooo"),
    React.createElement("h2", {}, "blahahahgahh")]
),
React.createElement("div",
    {id: "child2"},[
    React.createElement("h1", {}, "hellloooo"),
    React.createElement("h2", {}, "bglahahahahh")]
)]);
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);