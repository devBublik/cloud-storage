import React, {useEffect, useState} from 'react';
import ProductList from '../components/ProductList/ProductList';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import { productsRequest } from '../store/products/ProductsSlice';
import ReactPaginate from 'react-paginate';
import { goodsPerPage } from '../helpers/const';
import SortToolbar from '../components/SortToolbar/SortToolbar';
import Filters from '../components/Filters/Filters';

const MainPage = () => {
    const {products} = useAppSelector(state => state.products)
    const dispatch = useAppDispatch()

    useEffect(() => {
            dispatch(productsRequest())
        }, [])
    const [currentPage, setCurrentPage] = useState(1);

    const indexOfLastPost = currentPage * goodsPerPage;
    const indexOfFirstPost = indexOfLastPost - goodsPerPage;
    const currentGoods = products.slice(indexOfFirstPost, indexOfLastPost);
    
    // const paginate = ({selected}) => {
    //     setCurrentPage(selected + 1);
    // };
    return (
        <div className='main'>
            <div className="container main__container">
                <div className="aside">
                    <Filters/>
                </div>
                <div className="main__content">
                    <SortToolbar />
                    <ProductList products={currentGoods}/>
                    <ReactPaginate
                        // onPageChange={paginate}
                        pageCount={Math.ceil(products.length / goodsPerPage)}
                        previousLabel={'<'}
                        nextLabel={'>'}
                        containerClassName={'pagination'}
                        pageLinkClassName={'pagination__item'}
                        previousLinkClassName={'pagination__item'}
                        nextLinkClassName={'pagination__item'}
                        activeLinkClassName={'active'}
                />
                </div>
            </div>
        </div>
    );
};

export default MainPage;