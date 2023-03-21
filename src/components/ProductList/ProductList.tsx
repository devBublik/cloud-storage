import {FC} from 'react';
import { useAppSelector } from '../../helpers/hooks';
import { IProduct } from '../../helpers/types';
import ProductItem from './ProductItem';

type ProductsListType = {
    products: IProduct[];
}

const ProductList: FC<ProductsListType> = ({products}) => {
    const {brandFilter, priceFilterStart, priceFilterEnd, sort} = useAppSelector(state => state.settings)
    const filteredProducts = products.filter(item => 
            item.price > priceFilterStart && item.price < priceFilterEnd && item.brand.includes(brandFilter)
    )
 
    function sorting(sort: string) {
        let sortingProducts = [...filteredProducts];
        switch (sort) {
        case 'priceLowToHigh':
            sortingProducts = filteredProducts.sort((a, b) => a.price - b.price )
            return sortingProducts
        case 'priceHighToLow':
            sortingProducts = filteredProducts.sort((a, b) => b.price - a.price )
            return sortingProducts
         case 'rating':
            sortingProducts = filteredProducts.sort((a, b) => b.rating - a.rating )
            return sortingProducts
        default:
            return sortingProducts
        }
    }   
    const sortProducts = sorting(sort);
    console.log(filteredProducts)
    console.log(sortProducts)
    return (
        <ul className='products'>
            {sortProducts.length > 0 ? (
                sortProducts
                    .map((product) => {
                        return <ProductItem key={product.id} product={product}/>
                    }
                )
            ) : (
            <div className='products__no-goods'>
                Sorry, we couldn't find products with these parameters.Try to set less restrictive filters or to change your search request.
            </div>)}
        </ul>
    );
};

export default ProductList;