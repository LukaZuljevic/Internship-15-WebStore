import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { useParams, useLocation } from "react-router-dom";
import { fetchById, fetchProducts } from "../../api/productsApi";
import ClipLoader from "react-spinners/ClipLoader";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./ProductPage.css";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(
    location.state?.product || null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [randomIndex] = useState(() => Math.floor(Math.random() * 10));

  useEffect(() => {
    setLoading(true);

    const fetchData = async () => {
      try {
        const fetchedProduct = await fetchById(id);
        if (fetchedProduct) setProduct(fetchedProduct);

        const products = await fetchProducts();
        const productsWihoutMainProduct = products.filter(
          (item: Product) => item.id !== fetchedProduct?.id
        );

        setProducts(productsWihoutMainProduct);
      } catch (error) {
        console.log("Error", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="product-page">
      <img
        className="product-page__image"
        src={product?.image}
        alt={product?.title}
      />
      <h1>{product?.title}</h1>
      <p>{product?.category}</p>
      <p>€{product?.price}</p>
      {loading ? (
        <div className="clip-loader">
          <ClipLoader size={150} />
        </div>
      ) : (
        <div className="you-may-like-section">
          <h2>You also may like</h2>
          <ul className="products-list">
            {products.slice(randomIndex, 20).map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
