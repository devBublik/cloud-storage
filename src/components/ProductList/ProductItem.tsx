import React, {FC} from 'react';
import { starWidth } from '../../helpers/const';
import { IProduct } from '../../helpers/types';
import Like from '../Like/Like';

type ProductItemProps = {
    product: IProduct
}

const ProductItem: FC<ProductItemProps> = (props) => {
    const {product} = props;
    const activeWidth = (Number(starWidth*product.rating).toFixed(2))
    return (
        <div className='product'>
           <Like product={product}/>
            <div className="product__image">
                <img src={product.thumbnail} alt={product.title} />
            </div>
            <div className="product__info">
                <h3 className='product__title'>{product.title}</h3>
                <div className="product__rating">       
                    <div className="product__stars stars">
                        <div className="stars__row stars__row_inactive"></div>
                        <div className="stars__row stars__row_active" style={{width: `${activeWidth}%`}}></div>
                    </div>
                </div>
                <p className='product__price'>{product.price} $</p>
            </div>
            <button className='product__buy'>buy</button>
            <div className="product__sale">{product.discountPercentage}</div>
        </div>
    );
};

export default ProductItem;