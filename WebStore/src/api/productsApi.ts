import { FetchedProduct } from "../types/fetchedProduct.ts";
import { Product } from "../types/product.ts";

const FAKE_STORE_API = "https://fakestoreapi.com";

export const fetchProducts = (): Promise<Product[]> => {
  return fetch(`${FAKE_STORE_API}/products?limit=20`)
    .then((response) => response.json())
    .then((data: FetchedProduct[]) => {
      if (!data) return [];

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

export const fetchById = (
  productId: string | undefined
): Promise<Product | null> => {
  return fetch(`${FAKE_STORE_API}/products/${productId}`)
    .then((response) => response.json())
    .then((data: FetchedProduct) => {
      if (!data) return null;
      
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
