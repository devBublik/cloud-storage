import React, {FC} from 'react';
import { IProduct, ProductsProps } from '../../helpers/types';
import FavoriteItem from './FavoriteItem';

type FavoriteListProps = {
    products: IProduct[],
    setModal: React.Dispatch<React.SetStateAction<boolean>>,
    isModal: boolean
}


const FavoriteList:FC<FavoriteListProps> = ({products, isModal, setModal}) => {
    return (
        <ul className='favorite__list'>
            {products.length ? (
                products.map((product) => <FavoriteItem key={product.id} product={product} isModal={isModal} setModal={setModal}/>)
            ) : (<p>Please, add some goods to favorite</p>)}
        </ul>
    );
};

export default FavoriteList;