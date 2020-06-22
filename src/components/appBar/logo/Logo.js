import React from 'react';
import logo from "../../../assets/images/logo.png";

const Logo = () => {
    return (
        <a href="#home">
            <div className="logo">
                <img src={logo} alt="logo" />
                <span>Rami Talisveiber</span>
            </div>
        </a>
    );
};

export default Logo;
