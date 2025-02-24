export enum productCategories {
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
}

export type Product = {
  id: number;
  title: string;
  price: number;
  category: productCategories;
  image?: string;
};

export type FetchedProduct = {
  id: number;
  title: string;
  price: number;
  category: productCategories;
  image?: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};
