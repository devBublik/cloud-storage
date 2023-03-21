import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_API, PRODUCT__URL } from "../../helpers/const";
import { IProduct } from "../../helpers/types";

// type categoryProductsProducts = IProduct[] | [];
interface categoryProductsState {
    categoryProducts: IProduct[],
    brands: string[]
}

const initialState = {
    categoryProducts: [],
    brands: []
} as categoryProductsState;


export const categoryProductsRequest = createAsyncThunk<IProduct[]>('fetch/products',
    async (category) => {
        return fetch(`${BASE_API}${PRODUCT__URL}/category/${category}`)
                    .then(res => res.json())
                    .then((data) => data.products)
                    .catch((error) => ({error}))
    }
)

export const categoryProductSlice = createSlice({
    name: 'categoryProducts',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(categoryProductsRequest.fulfilled.type, (state, action:PayloadAction<IProduct[]> ) => {
                state.categoryProducts = action.payload;
                state.brands = Array.from(new Set(state.categoryProducts.map((product) => product.brand)))
            })
    }
})

export default categoryProductSlice.reducer