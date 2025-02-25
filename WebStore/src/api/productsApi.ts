import { Product, FetchedProduct } from "../types/product.ts";

export const fetchProducts = (): Promise<Product[]> => {
  return fetch("https://fakestoreapi.com/products?limit=15")
    .then((response) => response.json())
    .then((data: FetchedProduct[]) => {
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

export const fetchById = (productId: string | undefined): Promise<Product | null> => {
  return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
    .then((data: FetchedProduct) => {
      const formattedProduct: Product = {
        id: data.id,
        title: data.title,
        price: data.price,
        category: data.category,
        image: data.image,
      };
      return formattedProduct;
    })
    .catch((error) => {
      console.log("Error", error);
      return null;
    });
};
