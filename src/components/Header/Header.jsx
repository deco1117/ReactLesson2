import React from 'react';
import "./index.scss";

const Header = () => {
    let admin = true
    return (
        <header>
            <div className="header">
                <nav className="nav">
                    <ul className="nav__list">
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Works</a></li>
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Blog</a></li>
                        <li className="nav__list--item"><a href="#" className="nav__list--item-link">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;