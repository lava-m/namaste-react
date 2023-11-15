/*
*<div id="parent">
    <div id="child">
        <h1>Hi</h1>
        <h2>Hello</h2>
    </div>
*<div id="child2">
        <h1>Hi</h1>
        <h2>Hello</h2>
    </div>
</div>    
*/

const parent = React.createElement("div", {id:parent},[
    React.createElement("div", {id:child},[
        React.createElement("h1",{},"Hi"),
        React.createElement("h1",{},"Hello"),
    ]),
   
    React.createElement("div", {id:child},[
        React.createElement("h1",{},"Hi"),
        React.createElement("h1",{},"Hello")
    ]),
]);