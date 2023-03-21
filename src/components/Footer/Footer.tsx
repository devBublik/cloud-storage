import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import { HOME_URL } from '../../helpers/const';
import logo from '../../assets/images/logo.svg';

const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <NavLink to={(HOME_URL)}>
                    <img src={logo} alt=""/>
                </NavLink>
            </div>
        </footer>
    );
};

export default Footer;