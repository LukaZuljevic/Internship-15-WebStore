export enum productCategories {
  Electronics = "electronics",
  Jewelery = "jewelery",
  Men_clothing = "men's clothing",
  Women_clothing = "women's clothing",
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
