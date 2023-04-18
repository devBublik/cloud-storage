import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { starWidth } from '../../helpers/const';
import { useAppDispatch, useAppSelector } from '../../helpers/hooks';
import { IProduct } from '../../helpers/types';
import { addToCart } from '../../store/cart/cartSlice';
import Like from '../Like/Like';

type ProductItemProps = {
    product: IProduct
}

const ProductItem: FC<ProductItemProps> = ({product}) => {
    const activeWidth = (Number(starWidth*product.rating).toFixed(2))
    const dispatch = useAppDispatch();
    const {goodsInCart} = useAppSelector(state => state.cart)
    function defineId(id: number) {
        return goodsInCart.find((item) => item.id === id )
    }
    const isInCart = defineId(product.id)
    return (
        <div className='product'>
           <Like product={product}/>
            <NavLink to={`/product/${product.id}`} className="product__link">
                <div className="product__image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
            </NavLink>
            <div className="product__info">
                <NavLink to={`/product/${product.id}`} className="product__link">
                    <h3 className='product__title'>{product.title}</h3>
                </NavLink>
                <div className="product__rating">       
                    <div className="product__stars stars">
                        <div className="stars__row stars__row_inactive"></div>
                        <div className="stars__row stars__row_active" style={{width: `${activeWidth}%`}}></div>
                    </div>
                </div>
                <p className='product__price'>{product.price} $</p>
            </div>
            <button
                className={isInCart ? 'product__buy product__buy_remove' : 'product__buy'}
                onClick={() => dispatch(addToCart(product))}
            >
                {isInCart ? 'remove' : 'buy'}
            </button>
            <div className="product__sale">{product.discountPercentage} %</div>
        </div>
    );
};

export default ProductItem;