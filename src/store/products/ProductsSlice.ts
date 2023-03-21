import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_API, PRODUCT__URL } from "../../helpers/const"
import { IProduct, ProductsState } from "../../helpers/types"



const initialState = {
    products: [],
    error: '',
    brands: [],
} as ProductsState;


export const productsRequest = createAsyncThunk<ProductsState>('fetch/products',
    () => {
        return fetch(`${BASE_API}${PRODUCT__URL}`)
                    .then(res => res.json())
                    .then((data) => data.products)
                    .catch((error) => ({error}))
    }
)

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(productsRequest.pending.type, (state) => {
                state.error = '';
            })
            .addCase(productsRequest.fulfilled.type, (state, action: PayloadAction<IProduct[] | []>) => {
                state.products = action.payload;
                console.log(state.products)
                state.error = '';
                state.brands = Array.from(new Set(state.products.map((product) => product.brand)));
            })
            .addCase(productsRequest.rejected.type, (state) => {
                state.error = 'something went wrong';
            });
    },
})

export default productSlice.reducer