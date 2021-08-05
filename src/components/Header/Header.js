import React from 'react';
import './Header.css';
import logo from '../../images/logo.png'
import Navbar from '../Navbar/Navbar';
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            {/* <h1 className="text-center text-danger">This is Header</h1> */}
             <Navbar></Navbar>
        </div>
    );
};

export default Header;