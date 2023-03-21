import { createSlice } from "@reduxjs/toolkit"
import { ISettingsProducts } from "../../helpers/types"

const initialState = {
    brandFilter: '',
    priceFilterStart: 0,
    priceFilterEnd: 2000,
    sort: '',
    display: 'grid'
} as ISettingsProducts;

const formSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setPriceFilterStart: (state, action) => {
            state.priceFilterStart = action.payload
        },
        setPriceFilterEnd: (state, action) => {
            state.priceFilterEnd = action.payload
        },
        resetBrandFilter: (state) => {
            state.brandFilter = ''
        },
        setBrandFilter: (state, action) => {
            state.brandFilter = action.payload
        },
        resetFilters: (state) => {
            state.brandFilter= '';
            state.priceFilterStart= 0;
            state.priceFilterEnd= 2000;
            state.sort = ''
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setDisplay: (state, action) => {
            state.display = action.payload
        }
    }
})

export const {setPriceFilterStart, setPriceFilterEnd, setBrandFilter, resetBrandFilter, resetFilters, setSort, setDisplay} = formSlice.actions;

export default formSlice.reducer;