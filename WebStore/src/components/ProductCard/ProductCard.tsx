import { Product } from "../../types/product";

type ProductCardProps = {
  product: Product;
};

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="product-card">
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
