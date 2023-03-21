import CartPage from "./pages/CartPage";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";
import { CART_URL, HOME_URL, PRODUCT_URL } from "./helpers/const";


export const routes = [
    {
        path: HOME_URL,
        Component: MainPage
    },
    {
        path: PRODUCT_URL  + '/:id',
        Component: ProductPage
    },
    {
        path: CART_URL,
        Component: CartPage
    },
]