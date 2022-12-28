import React from "react";
import "./App.scss";
import Cart from "./components/Cart";
import Events from "./components/Events";

function App() {
    return (
        <div className="App">
            <div className="App__left">
                <Events />
            </div>
            <div className="App__right">
                <Cart />
            </div>
        </div>
    );
}

export default App;
