import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from '@reduxjs/toolkit';
import categoryReducer from './categories/CategoriesSlice';
import productsReducer from './products/ProductsSlice';
import settingsReducer from './settings/SettingsSlice';
import categoryProductReducer from './categoryProducts/categoryProductsSlice';
// const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        products: productsReducer,
        settings: settingsReducer,
        // categoryProducts: categoryProductReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch



export default store;