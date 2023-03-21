export interface CategoryState {
    category: string[] | [],
    error: string,
    activeCategory: number 
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
}

export interface ISettingsProducts {
    brandFilter: string,
    priceFilterStart: number,
    priceFilterEnd: number,
    stockFilterStart: 0,
    stockFilterEnd: 146,
    sort: string,
    display: displayType
}

type displayType = 'grid' | 'column';