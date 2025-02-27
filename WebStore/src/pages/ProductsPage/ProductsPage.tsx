import { useState, useEffect, useMemo } from "react";
import { fetchProducts } from "../../api/productsApi";
import { Product } from "../../types/product";
import ClipLoader from "react-spinners/ClipLoader";
import "react-loading-skeleton/dist/skeleton.css";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import { SearchFilter } from "../../components/Filters/SearchFilter/SearchFilter";
import { CategoryFilter } from "../../components/Filters/CategoryFilter/CategoryFilter";
import { ProductCategories } from "../../types/productCategories";
import "./ProductsPage.css";
import "../../components/Filters/Filters.css";

const PRODUCTS = "products";

export const ProductsPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [search, setSearch] = useState<string>("");
  const [category, setCategory] = useState<ProductCategories | "">("");

  useEffect(() => {
    const storedProducts: Product[] = JSON.parse(
      localStorage.getItem(PRODUCTS) || "[]"
    );

    fetchProducts()
      .then((products: Product[]) =>
        setProducts([...storedProducts, ...products])
      )
      .finally(() => setLoading(false));
  }, []);

  const filteredProducts: Product[] = useMemo(() => {
    if (!category && !search) return products;

    return products.filter((product: Product) => {
      const searchFilter = product.title
        .toLowerCase()
        .includes(search.toLowerCase());
      const categoryFilter = category ? product.category === category : true;
      return searchFilter && categoryFilter;
    });
  }, [category, search, products]);

  return (
    <div className="products-page">
      {loading ? (
        <div className="clip-loader">
          <ClipLoader size={150} />
        </div>
      ) : (
        <>
          <div className="filters">
            <SearchFilter setSearch={setSearch} />
            <CategoryFilter setCategory={setCategory} />
          </div>
          <ul className="products-list">
            {filteredProducts.slice(0, 20).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
