export enum productCategories {
  Electronics = "electronics",
  Jewelery = "jewelery",
  Men_clothing = "men's clothing",
  Women_clothing = "women's clothing",
}

export type Product = {
  id: string;
  title: string;
  price: string;
  category: productCategories;
  image?: string;
};

export type FetchedProduct = {
  id: string;
  title: string;
  price: string;
  category: productCategories;
  image?: string;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};
