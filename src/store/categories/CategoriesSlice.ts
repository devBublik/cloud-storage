import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BASE_API, CATEGORIES__URL } from "../../helpers/const";
import { CategoryState } from "../../helpers/types";

const initialState = {
    category: [],
    error: '',
    activeCategory: 0,
} as CategoryState;

export const categoryRequest = createAsyncThunk<string[]>(
    'fetch/categories',
    (data, obj) => {
        return fetch(`${BASE_API}${CATEGORIES__URL}`)
            .then(res => res.json())
            .catch(error => ({error}))
    }
)
export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action) {
            state.activeCategory = action.payload.activeIndex
            console.log(state.activeCategory)
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

export const { changeCategory } = categorySlice.actions

export default categorySlice.reducer;