import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = ()=>{
    return (
        <div className="app">
            <Header/>
        </div>
    )
}

root.render(<App/>);