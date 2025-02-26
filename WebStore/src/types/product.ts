export enum ProductCategories {
  ELECTORNICS = "electronics",
  JEWELERY = "jewelery",
  MEN_CLOTHING = "men's clothing",
  WOMEN_CLOTHING = "women's clothing",
}

export type Product = {
  id: string;
  title: string;
  price: string;
  category: ProductCategories;
  image?: string;
};

export type FetchedProduct = {
  id: string;
  title: string;
  price: string;
  category: ProductCategories;
  image?: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};
