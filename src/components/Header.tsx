import React from "react";
import { Link } from "react-router-dom"; // react router使用する？
import "./Header.css"; 

const Header: React.FC = () => {
    return (
        <header className="header">
            <div className="container">
                <h1 className="logo">My Application</h1>
                <nav>
                    <ul className="nav-links">
                        <li><Link to="/">ホーム</Link></li>
                        <li><Link to="/about">アバウト</Link></li>
                        <li><Link to="/contact">お問い合わせ</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
