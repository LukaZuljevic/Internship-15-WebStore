import { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "../../api/productsApi";
import { Product } from "../../types/product";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchFilter } from "../../components/Filters/SearchFilter/SearchFilter";
import { CategoryFilter } from "../../components/Filters/CategoryFilter/CategoryFilter";
import { productCategories } from "../../types/product";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<productCategories | "">("");

  useEffect(() => {
    fetchProducts()
      .then((products: Product[]) => {
        setProducts(products);
        setFilteredProducts(products);
      })
      .finally(() => setLoading(false));
  }, []);

  const filter: Product[] = useMemo(() => {
    if (!category && !search) return products;

    return products.filter((product: Product) => {
      const searchFilter = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const categoryFilter = category ? product.category === category : true;
      return searchFilter && categoryFilter;
    });
  }, [category, search, products]);

  useEffect(() => {
    setFilteredProducts(filter);
  }, [filter]);

  return (
    <div className="products-page">
      {loading ? (
        <SkeletonTheme baseColor="#f4f4f9" highlightColor="#f0f0f5">
          <Skeleton count={7} height={60} style={{ margin: "1rem 0" }} />
        </SkeletonTheme>
      ) : (
        <>
          <div className="filters">
            <SearchFilter setSearch={setSearch} />
            <CategoryFilter setCategory={setCategory} />
          </div>
          <ul className="products-list">
            {filteredProducts.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
