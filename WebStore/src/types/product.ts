import { ProductCategories } from "./productCategories";

export type Product = {
  id: string;
  title: string;
  price: string;
  category: ProductCategories;
  image?: string;
};
