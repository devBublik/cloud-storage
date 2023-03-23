import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { PRODUCT_URL, starWidth } from '../../helpers/const';
import { IProduct } from '../../helpers/types';
import Count from '../Count/Count';

type CartProductProps = {
    product: IProduct
}

const CartItem: FC<CartProductProps> = ({product}) => {
    const activeWidth = (Number(starWidth*product.rating).toFixed(2))
    return (
        <li className="item">
            <NavLink className="item__link item__link_image" to={PRODUCT_URL + '/' + product.id}>
                <img className="item__image" src={product.thumbnail} alt={product.title}/>
            </NavLink>
            <div className="item__title-wrapper">
                <a className="item__link item__link_title" href="/product/2">
                    <h3 className="item__title">{product.title}</h3>
                </a>
                <p className="item__title-text">Category: {product.category}</p>
                <p className="item__title-text">Brand: {product.brand}</p>
            </div>
            <div className="item__info">
                <div className="item__rating">
                    <div className="item__stars stars">
                        <div className="stars__row stars__row_inactive"></div>
                        <div className="stars__row stars__row_active" style={{width: `${activeWidth}%`}}></div>
                    </div>
                        <p className="item__rate">{product.rating}</p>
                </div>
                <p className="item__stock">Stock: {product.stock}</p>
                <p className="item__price">{product.price} $</p>
            </div>
            
            <Count product={product}/>
        </li>
    );
};

export default CartItem;