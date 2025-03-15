import React from "react";
import { useState } from "react";
import "../../styles.css";
import { headerLogoURL } from "../utils/consts";

const Header = ()=>{
    const [buttonUI,setButtonUI] = useState("Login")
    return (
        <div className="header">
            <a href="https://github.com/"><img className="header-logo" src={headerLogoURL}></img></a>
                <ul className="header-nav-items">
                    <li>Home</li>
                    <li>All Users</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <button onClick={()=>buttonUI==="Login" ? setButtonUI("Logout"): setButtonUI("Login")}>{buttonUI}</button>
                </ul>
        </div>
    )
}
export default Header;