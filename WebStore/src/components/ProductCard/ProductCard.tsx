import { Product } from "../../types/product";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { ROUTES } from "../../router/routes";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`${ROUTES.PRODUCT}/${product.id}`, { state: { product } });
      }}
      className="product-card"
    >
      <img
        className="product-card__image"
        src={product.image}
        alt={product.title}
      />
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <p>€{product.price}</p>
    </div>
  );
};
