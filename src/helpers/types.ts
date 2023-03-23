export interface CategoryState {
    category: string[] | [],
    error: string,
    activeCategory: string 
}

export interface ProductsState {
    products: IProduct[] | [],
    error: string,
    brands: string[],
}

export interface IProduct {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[],
    count: number,
}

export interface ISettingsProducts {
    brandFilter: string,
    priceFilterStart: number,
    priceFilterEnd: number,
    stockFilterStart: 0,
    stockFilterEnd: 146,
    sort: string,
    display: displayType,
    category: string[] | [],
    error: string,
    activeCategory: string 
}

type displayType = 'grid' | 'column';

export type ProductProps = {
    product: IProduct
}

export type ProductsProps = {
    products: IProduct[]
}