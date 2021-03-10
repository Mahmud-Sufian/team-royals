import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div className="header">
            {/* <div className="logo"></div>
            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/all-team">All Team</Link></li>

            </ul> */}

            <Navbar>
                <Navbar.Brand><span class="font-weight-bolder text-white">Football Teams</span></Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/home">Home</Link>
                    <Link to="/home">All Teams</Link>
                     
                </Nav> 
            </Navbar>
        </div>
    );
};

export default Header;