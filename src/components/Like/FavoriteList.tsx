import {FC} from 'react';
import { ProductsProps } from '../../helpers/types';
import FavoriteItem from './FavoriteItem';


const FavoriteList:FC<ProductsProps> = ({products}) => {
    return (
        <ul className='favorite__list'>
            {products.length ? (
                products.map((product) => <FavoriteItem key={product.id} product={product}/>)
            ) : (<p>Please, add some goods to favorite</p>)}
        </ul>
    );
};

export default FavoriteList;