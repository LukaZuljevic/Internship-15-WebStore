import { productCategories } from "../../../types/product";

type CategoryFilterProps = {
  setCategory: (category: productCategories) => void;
};

export const CategoryFilter = ({ setCategory }: CategoryFilterProps) => {
  return (
    <select
      className="category-dropdown"
      name="category"
      onChange={(e) => setCategory(e.target.value as productCategories)}
    >
      <option value="">Choose a category</option>
      <option value="electronics">Electronics</option>
      <option value="jewelery">Jewelery</option>
      <option value="men's clothing">Men's clothing</option>
      <option value="women's clothing">Women's clothing</option>
    </select>
  );
};
