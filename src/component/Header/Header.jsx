import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="header">
            <img src={logo}></img>
            <div>
                <Link to="/orders">Order</Link>
                <Link to="/order-re">Order Review</Link>
                <Link to="/inventory">Manage Inventory</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );

};

export default Header;