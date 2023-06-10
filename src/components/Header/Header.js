import React from 'react';
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <NavLink to="/" className='header-link'>
                <h1>BeerMe</h1>
            </NavLink>
        </div>
    )
}

export default Header

