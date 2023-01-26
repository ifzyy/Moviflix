import React, { useState } from "react";
import { Link } from "react-router-dom";

import "../styles/Navbar.css";

function Navbar(props) {

    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
        if (active === "nav__menu") {
            setActive("nav__menu nav__active");
        } else setActive("nav__menu");

        // Icon Toggler
        if (icon === "nav__toggler") {
            setIcon("nav__toggler toggle");
        } else setIcon("nav__toggler");
    };
    return (
        <nav className="navi">
            <Link to="/" className="nav__brand logo">
               Moviflix
            </Link>
            <ul className={active}>
                <li className="nav__item">
                    <Link to="/watchlist" className="nav__link link">
                       WatchList
                    </Link>
                </li>
                <li className="nav__item">
                    <button onClick={props.logout} className="nav__link link">
                        Logout
                    </button>
                </li>
            </ul>
            <div onClick={navToggle} className={icon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
}

export default Navbar;