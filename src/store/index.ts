import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/cartSlice';
import productsReducer from './products/ProductsSlice';
import settingsReducer from './settings/SettingsSlice';
// const rootReducer = combineReducers({})

export const store = configureStore({
    reducer: {
        // category: categoryReducer,
        products: productsReducer,
        settings: settingsReducer,
        cart: cartReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch



export default store;