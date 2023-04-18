import React, {FC} from 'react';
import { useAppSelector } from '../../helpers/hooks';
import { IProduct } from '../../helpers/types';
import ProductItem from './ProductItem';

type ProductsListType = {
    products: IProduct[];
}

const ProductList: FC<ProductsListType> = ({products}) => {
    const {display} = useAppSelector(state => state.settings);
    
    return (
        <ul className={display === 'grid' ? 'products products_grid' : 'products products_column'}>
            {products.length > 0 ? (
                products
                    .map((product) => {
                        return <ProductItem key={product.id} product={product}/>
                    }
                )
            ) : (
            <div className='products__no-goods'>
                Sorry, we could not find products with these parameters.Try to set less restrictive filters or to change your search request.
            </div>)}
        </ul>
    );
};

export default ProductList;