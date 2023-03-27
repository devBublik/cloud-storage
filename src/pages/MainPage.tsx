import {useEffect, useState} from 'react';
import ProductList from '../components/ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import { productsRequest } from '../store/products/ProductsSlice';
import ReactPaginate from 'react-paginate';
import { goodsPerPage } from '../helpers/const';
import SortToolbar from '../components/SortToolbar/SortToolbar';
import Filters from '../components/Filters/Filters';
import { categoryRequest } from '../store/settings/SettingsSlice';
import { IProduct } from '../helpers/types';

const MainPage = () => {
    const {products} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(productsRequest())
        }, [])

    useEffect(() => {
            dispatch(categoryRequest())
    }, [])
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * goodsPerPage;
    const indexOfFirstPost = indexOfLastPost - goodsPerPage;
    
    const {brandFilter, priceFilterStart, priceFilterEnd, sort} = useAppSelector(state => state.settings)
    const {activeCategory} = useAppSelector(state => state.settings)

    let categoryProducts: IProduct[] = []
    if (activeCategory.length > 0) {
        categoryProducts = products.filter((item) => item.category === activeCategory)
    }
    function categoryFilter(arr: IProduct[]) {
        if (activeCategory.length) {
            console.log(true)
            const res = arr.filter((item) => item.category === activeCategory)
            return res
        }
        return arr
    }

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
    const finalProducts = categoryFilter(filteredProducts)
    const currentGoods = finalProducts.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = ({selected} : {selected: number}) : void => {
        setCurrentPage(selected + 1);
    };
    return (
        <div className='main'>
            <div className="container main__container">
                <div className="aside">
                    <Filters/>
                </div>
                <div className="main__content">
                        <SortToolbar />
                        <ReactPaginate
                            onPageChange={paginate}
                            pageCount={Math.ceil(finalProducts.length / goodsPerPage)}
                            previousLabel={'<'}
                            nextLabel={'>'}
                            containerClassName={'pagination'}
                            pageLinkClassName={'pagination__item'}
                            previousLinkClassName={'pagination__item'}
                            nextLinkClassName={'pagination__item'}
                            activeLinkClassName={'active'}
                        />
                        <ProductList products={currentGoods}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;