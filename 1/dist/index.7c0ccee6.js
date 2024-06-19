const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "hellloooo"),
        React.createElement("h2", {}, "blahahahahh")
    ]),
    React.createElement("div", {
        id: "child2"
    }, [
        React.createElement("h1", {}, "hellloooo"),
        React.createElement("h2", {}, "blahahahahh")
    ])
]);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.7c0ccee6.js.map
