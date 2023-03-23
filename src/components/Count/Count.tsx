import {FC} from 'react';
import { useDispatch } from 'react-redux';
import { ProductProps } from '../../helpers/types';
import { decreaseCount, deleteProduct, increaseCount } from '../../store/cart/cartSlice';

const Count: FC<ProductProps> = ({product}) => {
    const dispatch = useDispatch()
    return (
        <div className="item__control">
            <div className="item__count count">
                <button className={product.count === 1 ? 'count__btn disabled' : 'count__btn'} onClick={() => dispatch(decreaseCount({product}))}>
                    <span className="count__digit">-</span>
                </button>
                    <span className="count__number">{product.count}</span>
                <button className="count__btn" onClick={() => dispatch(increaseCount({product}))}>
                    <span className="count__digit">+</span>
                </button>
            </div>
            <button className="item__remove" onClick={() => dispatch(deleteProduct({product}))}>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.3337 8.54667L23.4537 6.66667L16.0003 14.12L8.54699 6.66667L6.66699 8.54667L14.1203 16L6.66699 23.4533L8.54699 25.3333L16.0003 17.88L23.4537 25.3333L25.3337 23.4533L17.8803 16L25.3337 8.54667Z"></path>
                </svg>
            </button>
        </div>
    );
};

export default Count;