import React, { useState, FC } from 'react';
import { promoName } from '../../helpers/const';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import {toggleActivePromo, applyPromocode} from '../../store/cart/cartSlice';
type OrderProps = {
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean
}

const Total: FC<OrderProps> = ({setModal, isModal}) => {
    const [promo, setPromo] = useState('');
    const {totalItems, totalPrice, promoPrice, isActivePromo} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()
    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        if (promo === promoName) {
            dispatch(toggleActivePromo())
            dispatch(applyPromocode())
        }
        setPromo('')
   
    }
    return (
        <div className="total">
            <div className="total__title">Summary</div>
            <div className="total__table">
                <div className="total__row">
                    <p className="total__text">Items: </p>
                    <p className="total__text total__text_bold">{totalItems}</p>
                </div>
                <div className="total__row">
                    <p className="total__text total-price">Total price:</p>
                    <p className="total__text total__text_bold">{totalPrice} $</p>
                </div>
                <div className={isActivePromo ? 'total__row total__row_discount': 'total__row hide'}>
                    <p className="total__text">Discount price: </p>
                    <p className="total__text total__text_discount"> {Math.floor(promoPrice)} $</p>
                </div>
            </div>
            <div className="total__promo promo total__section">
                <div className="promo__codes promo__codes_drop"></div>
                    <input
                        type="text"
                        className="promo__input"
                        placeholder="Enter promo code"
                        name = 'promo'
                        value={promo}
                        onChange={(e) => {
                            setPromo(e.target.value)
                        }}  />  
                    <button className={promo.length> 0 ? 'promo__btn' : 'hide' } onClick={handleSubmit}> apply</button>
                <p className={isActivePromo ? 'hide' : 'promo__text'}>
                    <span>Promo codes for test: </span>
                    <span>RSS</span>
                </p>
                <div 
                    className={isActivePromo ? 'promo__codes' : 'hide'}
                >
                    Promocode applied!
                </div>
            </div>
        <button className="btn total__buy" onClick={() =>setModal(isModal=!isModal )}>Buy Now</button>
    </div>
    );
};

export default Total;