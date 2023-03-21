import {FC, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { IProduct } from '../../helpers/types';

type PaginationProps = {
    products: IProduct[],
    currentPage: number,
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>,

}

const Pagination: FC<PaginationProps> = ({products}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [goodsPerPage, setGoodsPerPage] = useState(5);
    const indexOfLastPost = currentPage * goodsPerPage;
    const indexOfFirstPost = indexOfLastPost - goodsPerPage;
    const currentGoods = products.slice(indexOfFirstPost, indexOfLastPost);
    
    const paginate = (selected: number) => {
        setCurrentPage(selected + 1);
    };
    return (
        <div className='cart__header'>
                <div className="cart__pages-inp">
                    <span>Products per page</span>
                    <input
                        className='cart__input'
                        type="number"
                        value={goodsPerPage}
                        onChange={(e) => setGoodsPerPage(Number(e.target.value))}
                        max="10"
                    />
                </div>
                <ReactPaginate
                    onPageChange={() => paginate}
                    pageCount={Math.ceil(products.length / goodsPerPage)}
                    previousLabel={'<'}
                    nextLabel={'>'}
                    containerClassName={'pagination'}
                    pageLinkClassName={'page-number'}
                    previousLinkClassName={'page-number'}
                    nextLinkClassName={'page-number'}
                    activeLinkClassName={'active'}
               />
            </div>
    );
};

export default Pagination;