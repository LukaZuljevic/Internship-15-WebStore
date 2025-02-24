import { useState, useEffect } from "react";
import { fetchProducts } from "../../api/productsApi";
import { Product } from "../../types/product";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";

export const ProductPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts()
      .then((products: Product[]) => {
        setProducts(products);
        console.log(products);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="products-page">
      {loading ? (
        <SkeletonTheme baseColor="#f4f4f9" highlightColor="#f0f0f5">
          <Skeleton count={7} height={60} style={{ margin: "1rem 0" }} />
        </SkeletonTheme>
      ) : (
        <ul className="products-list">
          {products.map((product: Product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
      )}
    </div>
  );
};
