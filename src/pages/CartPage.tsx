import React, { FC } from 'react';
import CartItem from '../components/Cart/CartItem';
import { useAppSelector } from '../helpers/hooks';

const CartPage: FC = () => {
    const {goodsInCart} = useAppSelector(state => state.cart)

    return (
        <div className="container">  
            <div className='cart__container'>
                <ul className="cart__list cart-table"> 
                    {goodsInCart.length ? (
                    goodsInCart.map((good, ind) => {
                        return <CartItem  product={good} key={ind}/>
                    })
                ) : (<h2>Go shopping!</h2>)}
                </ul>
                {/* <CartTotal show={show} setShow={setShow}/>
                {show ? <Modal show={show} setShow={setShow}>
                            <OrderForm/>
                        </Modal> : ''
                } */}
            </div>    
        </div>
    );
};

export default CartPage;