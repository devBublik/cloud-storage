import {FC, useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Like from '../components/Like/Like';
import Slider from '../components/Slider/Slider';
import { BASE_API, PRODUCT__URL, starWidth } from '../helpers/const';
import { useAppDispatch, useAppSelector } from '../helpers/hooks';
import { IProduct } from '../helpers/types';
import { getOldPrice } from '../helpers/utils';
import { addToCart } from '../store/cart/cartSlice';


const ProductPage: FC = () => {
    const params = useParams();
    const dispatch = useAppDispatch()
    const id = params.id;
    const [product, setProduct] = useState<null | IProduct>(null)
     useEffect(() => {
        fetch(`${BASE_API}${PRODUCT__URL}/${id}`)
        .then(response => response.json())
        .then(res => setProduct(res))
    }, [id]);
    
    const {goodsInCart} = useAppSelector(state => state.cart)
    function defineId(id: number) {
        return goodsInCart.find((item) => item.id === id )
    }
    let isInCart: IProduct | undefined;
    if (product) {
        (isInCart = defineId(product.id)) 
    }
    console.log(id)
    return (
        <div className='container'>
            {product ? (
                <div className="product-page">
                    <div className="product-page__gallery">
                        <Slider images={product.images}/>
                    </div>
                    <div className="product-page__info">
                        <h2 className='product-page__title'>{product.title}</h2>
                        <div className="product-page__actions">
                            <Like product={product}/>
                            <div className="product__rating">       
                                <div className="product__stars stars">
                                    <div className="stars__row stars__row_inactive"></div>
                                    <div className="stars__row stars__row_active" style={{width: `${Number(starWidth*product.rating).toFixed(2)}%`}}></div>
                                </div>
                            </div>
                        </div>
                        <p className="product-page__desc">{product.description}</p>
                        <p className='product-page__stock'>Stock: {product.stock}</p>
                        <p className='product-page__price_old'>{getOldPrice(product.discountPercentage, product.price)} $</p>
                        <p className='product-page__price'>{product.price} $</p>
                        <button
                            className='product-page__btn'
                            onClick={() => dispatch(addToCart(product))}
                        >
                            {isInCart ? 'Remove' : 'Add to cart'}
                        </button>
                    </div>
                </div>
            ) : ('')}
            
        </div>
    );
};

export default ProductPage;