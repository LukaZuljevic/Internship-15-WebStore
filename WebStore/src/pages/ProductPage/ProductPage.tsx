import { useState, useEffect } from "react";
import { Product } from "../../types/product";
import { useParams, useLocation } from "react-router-dom";
import { fetchById } from "../../api/productsApi";

export const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const location = useLocation();

  const [product, setProduct] = useState<Product | null>(
    location.state?.product || null
  );

  useEffect(() => {
    if (!product) {
      fetchById(id).then((fetchedProduct: Product | null) =>
        setProduct(fetchedProduct)
      );
    }
  }, []);

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
    </div>
  );
};
