import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

export default function Header() {

    const handleClick = () => {
        const headerEl = document.querySelector(".index-nav");
        headerEl.classList.toggle("nav-open");
    }

    return (
        <>
            <header>
                <nav className="index-nav">
                    <div className="index-nav-logo">
                        <NavLink to="/"><img src={ process.env.PUBLIC_URL + "/images/foundmate-logo.jpg"} alt="found mate img"/></NavLink>
                    </div>

                    <div className="index-nav-links">
                        <ul>
                            <li><NavLink to="/account">Login</NavLink></li>
                            <li><NavLink to="/faq">FAQ</NavLink></li>
                            <li><NavLink to="/about" >About</NavLink></li>
                            <li><NavLink to="#">Contact us</NavLink></li>
                        </ul>
                    </div>

                    <button className="btn-mobile-nav" onClick={handleClick}>
                        <i className="icon-mobile-nav" name="menu">📄</i>
                        <i className="icon-mobile-nav" name="close">✖️</i>
                    </button>
                </nav>
            </header>
        </>
    );
}
