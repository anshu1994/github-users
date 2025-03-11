import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Footer from "./src/components/Footer";
import Layout from "./src/components/Layout";

const root = ReactDOM.createRoot(document.getElementById("root"));

const styleH = {
    marginLeft: "100px",
}

const App = ()=>{
    return (
        <div className="app">
            <Header/>
            <h1 style={styleH}>GitHub Users of the World</h1>
            <Layout/>
            <Footer/>
        </div>
    )
}

root.render(<App/>);