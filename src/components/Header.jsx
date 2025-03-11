import React from "react";
import "../../styles.css";
import { headerLogoURL } from "../utils/consts";

const Header = ()=>{
    return (
        <div className="header">
            <a href="https://github.com/"><img className="header-logo" src={headerLogoURL}></img></a>
                <ul className="header-nav-items">
                    <li>Home</li>
                    <li>All Users</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
        </div>
    )
}
export default Header;