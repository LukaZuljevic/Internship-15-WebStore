import { ProductCategories } from "./productCategories";

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
