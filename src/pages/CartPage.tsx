import React, { FC, useState } from 'react';
import CartItem from '../components/Cart/CartItem';
import FinishModal from '../components/Cart/FinishModal';
import Order from '../components/Cart/Order';
import Total from '../components/Cart/Total';
import Modal from '../components/Modal/Modal';
import { useAppSelector } from '../helpers/hooks';

const CartPage: FC = () => {
    const {goodsInCart} = useAppSelector(state => state.cart)
    const [isModal, setModal] = useState(false)
    const [isFinish, setIsFinish] = useState(false)
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
                {goodsInCart.length === 0 ? '' : (<Total isModal={isModal} setModal={setModal}/>) }
                <Modal
                    isVisible={isModal}
                    title="Order"
                    content={<Order isModal={isModal} setModal={setModal} setIsFinish={setIsFinish}/>}
                    onClose={() => setModal(false)}
                />
                <Modal
                    isVisible={isFinish}
                    title="Order"
                    content={<FinishModal/>}
                    onClose={() => setIsFinish(false)}
                />
            </div>    
        </div>
    );
};

export default CartPage;