import { Product, FetchedProduct } from "../types/product.ts";

export const fetchProducts = (): Promise<Product[]> => {
  return fetch("https://fakestoreapi.com/products?limit=15")
    .then((response) => response.json())
    .then((data) => {
      const formattedProducts: Product[] = data.map(
        (product: FetchedProduct) => {
          return {
            id: product.id,
            title: product.title,
            price: product.price,
            category: product.category,
            image: product.image,
          };
        }
      );
      return formattedProducts;
    })
    .catch((error) => {
      console.log("Error:", error);
      return [];
    });
};
