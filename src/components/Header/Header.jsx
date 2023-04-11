import React from 'react';
import "./index.scss";

const Header = () => {
    let admin = true
    return (
        <header>
            <div className="container">
                <nav className="nav">
                    <a href="#" className="nav__brand">REACT.JS</a>
                    <ul className="nav__list">
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Link-001</a></li>
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Link-002</a></li>
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Link-003</a></li>
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Link-004</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;