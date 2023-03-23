import {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { ProductProps } from '../../helpers/types';
import { getOldPrice } from '../../helpers/utils';

const FavoriteItem: FC<ProductProps> = ({product}) => {
    return (
        <div className='favorite'>
            <NavLink to={`/product/${product.id}`} className='favorite__link'>
                <div className="favorite__image">
                    <img src={product.thumbnail} alt={product.title} />
                </div>
                <span className='favorite__title'>{product.title}</span>
                <span className='favorite__price favorite__title'>{product.price} $</span>
                <span className='favorite__title favorite__old-price'>{getOldPrice(product.discountPercentage, product.price)} $</span>
            </NavLink>
        </div>
    );
};

export default FavoriteItem;