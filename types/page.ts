export enum PageType {
    ABOUT = 'about',
    PRODUCTS = 'products',
    PRICING = 'pricing',
}

export interface Page {
    name: PageType,
    views: number,
}