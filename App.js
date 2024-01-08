import React from "react";
import ReactDOM from "react-dom";

const parent = React.createElement("div", {id:parent},[
    React.createElement("div", {id:"child"},[
        React.createElement("h1",{},"Hi"),
        React.createElement("h2",{},"Hello"),
    ]),
   
    React.createElement("div", {id:"child2"},[
        React.createElement("h1",{},"Hi"),
        React.createElement("h2",{},"Hello")
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);