import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/cart.svg';
import { CART_URL, HOME_URL } from '../../helpers/const';
const Header: FC = () => {
    return (
        <header className='header'>
            <div className="container header_container">
                <NavLink to={(HOME_URL)}>
                    <img src={logo} alt=""/>
                </NavLink>
                <NavLink to={(CART_URL)}>
                    <img src={cart} alt=""/>
                </NavLink>
            </div>
        </header>
    );
};

export default Header;