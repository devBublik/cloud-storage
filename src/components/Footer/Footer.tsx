import React, { FC } from 'react';
import {NavLink} from 'react-router-dom';
import { HOME_URL } from '../../helpers/const';
import logo from '../../assets/images/logo.svg';

const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__wr">
                    <NavLink to={(HOME_URL)}>
                        <img src={logo} alt=""/>
                    </NavLink>
                    <div className="footer__copy">
                        © ONLine Store, 2023
                    </div>
                    <a href="https://github.com/devBublik" target='_blank' rel="noreferrer">DevBublik</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;