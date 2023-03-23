import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"
import { BASE_API, CATEGORIES__URL } from "../../helpers/const";
import { ISettingsProducts } from "../../helpers/types"

const initialState = {
    brandFilter: '',
    priceFilterStart: 0,
    priceFilterEnd: 2000,
    sort: '',
    display: 'grid',
    category: [],
    error: '',
    activeCategory: '',
} as ISettingsProducts;

export const categoryRequest = createAsyncThunk<string[]>(
    'fetch/categories',
    (data, obj) => {
        return fetch(`${BASE_API}${CATEGORIES__URL}`)
            .then(res => res.json())
            .catch(error => ({error}))
    }
)

const formSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload
            console.log(state.activeCategory)
        },
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
            state.sort = '';
            state.activeCategory = ''
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setDisplay: (state, action) => {
            state.display = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(categoryRequest.pending.type, (state) => {
                state.error = ''
            })
            .addCase(categoryRequest.fulfilled.type, (state, action: PayloadAction<string[]>) => {
                state.error = ''
                state.category = action.payload
            })
            .addCase(categoryRequest.rejected.type, (state) => {
                state.error = 'something went wrong'
            })
    }
})

export const {setPriceFilterStart, setPriceFilterEnd, setBrandFilter, resetBrandFilter, resetFilters, setSort, setDisplay,changeCategory} = formSlice.actions;

export default formSlice.reducer;