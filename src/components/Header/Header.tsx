import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.svg';
import cart from '../../assets/images/cart.svg';
import { CART_URL, HOME_URL } from '../../helpers/const';
import { useAppSelector } from '../../helpers/hooks';

type HeaderProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean
}
const Header: FC<HeaderProps> = ({setModal,isModal }) => {
    const {totalItems, totalPrice } = useAppSelector(state => state.cart)
    return (
        <header className='header'>
            <div className="container header_container">
                <NavLink to={(HOME_URL)}>
                    <img src={logo} alt=""/>
                </NavLink>
                <div className="header__nav">
                    <NavLink to={(CART_URL)}>
                        <span className='header__price'>{totalPrice > 0 ? `${totalPrice} $` : ''}</span>
                        <span className="header__cart">
                            <img className='header__cart' src={cart} alt="cart-icon"/>
                            {totalItems > 0 ? (
                                <span className='header__items'>{totalItems}</span>
                            ) : '' }
                        </span>
                    </NavLink>
                    <span className='header__like product__like'
                        onClick={() => setModal(!isModal)}
                    >
                        <svg
                            width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M7.36656 1C3.47849 1 0.392496 4.56658 1.10209 9.68573C1.71793 14.1286 12.3223 23 13.5 23C14.6777 23 25.2821 14.1286 25.8979 9.68573C26.6075 4.56647 23.5215 1 19.6334 1C17.0414 1 15.0222 2.0898 13.5 4.26939C11.9778 2.0898 9.9586 1 7.36656 1Z" stroke="black" strokeOpacity="0.3" strokeWidth="2"/>
                        </svg>
                    </span>
                </div>
            </div>
        </header>
    );
};

export default Header;