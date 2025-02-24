import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/productsApi";
import { Product } from "../../types/product";
import Skeleton from "react-loading-skeleton";

export const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);

    fetchProducts()
      .then((products: Product[]) => {
        setProducts(products);
        console.log(products);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      {loading ? (
        <Skeleton />
      ) : (
        <>
          <ul>
            {products.map((product: Product) => (
              <li key={product.id}>{product.title}</li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
