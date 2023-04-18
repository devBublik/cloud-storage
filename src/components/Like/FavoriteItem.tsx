import React, {FC} from 'react';
import { NavLink } from 'react-router-dom';
import { IProduct } from '../../helpers/types';
import { getOldPrice } from '../../helpers/utils';

type FavoriteListProps = {
    product: IProduct,
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean
}

const FavoriteItem: FC<FavoriteListProps> = ({product, setModal, isModal}) => {
    return (
        <div className='favorite'>
            <NavLink to={`/product/${product.id}`} className='favorite__link' onClick={() => {
                    setModal(isModal===!isModal)
                    }}>
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