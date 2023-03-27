import { createSlice } from "@reduxjs/toolkit"
import { WritableDraft } from "immer/dist/internal";
import { IProduct } from "../../helpers/types";

const lSorage: IProduct[]  = JSON.parse(localStorage.getItem('order') || '[]');
const totalPrice: number = lSorage.reduce((sum: number, curr: IProduct) => sum + curr.count * curr.price,0);
type PromoType = string;
const lProducts: IProduct[]  = JSON.parse(localStorage.getItem('likeProducts') || '[]');

type CartState = {
    goodsInCart:  IProduct[] | [],
    totalPrice: number,
    totalItems: number,
    isActivePromo: PromoType,
    promoPrice: number,
    likeProducts: IProduct[] | [],
}
const initialState = {
    goodsInCart: lSorage,
    totalPrice: totalPrice,
    totalItems: lSorage.reduce((sum, curr) => sum + curr.count,0),
    isActivePromo: JSON.parse(localStorage.getItem('promo') || 'false'),
    promoPrice: lSorage.reduce((sum, curr) => sum + curr.count * curr.price,0) * 0.85,
    likeProducts: lProducts
};

const orderSlice = createSlice({
    name: 'goodsInCart',
    initialState, 
    reducers: {
        addToCart: (state, action) => {
            const goodItem = state.goodsInCart.find((good) => good.id === action.payload.id)
            if (!goodItem) {
                state.goodsInCart.push({...action.payload, count: 1})
                
            } else {
                const newGoods = state.goodsInCart.filter((good) => good.id !== action.payload.id)
                state.goodsInCart = newGoods 
            }
            changeStates(state)
            localStorage.setItem('order', JSON.stringify(state.goodsInCart))
        },
        toLike: (state, action) => {
            const goodItem = state.likeProducts.find((good) => good.id === action.payload.id)
            if (!goodItem) {
                state.likeProducts.push({...action.payload, count: 1})
            } else {
                const newGoods = state.likeProducts.filter((good) => good.id !== action.payload.id)
                console.log(newGoods)
                state.likeProducts = newGoods 
            }
            localStorage.setItem('likeProducts', JSON.stringify(state.likeProducts))
        },
        increaseCount: (state, action) => {
            
            const goodItem = state.goodsInCart.find((good) => good.id === action.payload.product.id)
            console.log(action)
            if (goodItem && goodItem.stock > goodItem.count) {
                goodItem.count += 1
            }
            changeStates(state)
            localStorage.setItem('order', JSON.stringify(state.goodsInCart))
        },
        decreaseCount: (state, action) => {
            
            const goodItem = state.goodsInCart.find((good) => good.id === action.payload.product.id)
            if (goodItem && goodItem.count > 1) {
                goodItem.count -= 1
            }
            changeStates(state)
            localStorage.setItem('order', JSON.stringify(state.goodsInCart))
        },
        deleteProduct: (state, action) => {
            const goods = state.goodsInCart.filter((good) => good.id !== action.payload.product.id)
            state.goodsInCart = goods
            localStorage.setItem('order', JSON.stringify(goods))
            changeStates(state)
        },
        toggleActivePromo: (state) => {
            state.isActivePromo = !state.isActivePromo
            localStorage.setItem('promo', JSON.stringify(state.isActivePromo))
        },
        applyPromocode: (state) => {
            state.promoPrice = state.totalPrice*0.85;
        },
        clearCart: (state) => {
            state.goodsInCart =  lSorage;
            state.totalPrice= totalPrice;
            state.totalItems =lSorage.reduce((sum, curr) => sum + curr.count,0);
            state.isActivePromo = JSON.parse(localStorage.getItem('promo') || 'false');
            state.promoPrice = lSorage.reduce((sum, curr) => sum + curr.count * curr.price,0) * 0.85;
            state.likeProducts =lProducts
        }
    },
})

function changeStates(state: WritableDraft<CartState>) {
    state.totalItems = 0;
    state.totalPrice = 0;
    for (let i=0; i< state.goodsInCart.length; i++) {
        console.log(state.totalItems)
        state.totalItems += state.goodsInCart[i].count
    }

    for (let i=0; i< state.goodsInCart.length; i++) {
        state.totalPrice += state.goodsInCart[i].count * state.goodsInCart[i].price
    }
    state.promoPrice = state.totalPrice*0.85;

}

export const {addToCart, increaseCount, decreaseCount, deleteProduct, toggleActivePromo, applyPromocode, toLike, clearCart} = orderSlice.actions
export default orderSlice.reducer