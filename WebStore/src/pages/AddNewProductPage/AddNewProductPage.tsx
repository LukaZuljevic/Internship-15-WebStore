import { useEffect, useState, useRef } from "react";
import { CategoryFilter } from "../../components/Filters/CategoryFilter/CategoryFilter";
import { ProductCategories } from "../../types/product";
import { Input } from "../../components/Input/Input";
import toast, { Toaster } from "react-hot-toast";
import { Product } from "../../types/product";
import { v4 as uuidv4 } from "uuid";

type ProductDataType = {
  title: string;
  price: string;
  category: ProductCategories;
  image?: string;
};

export const AddNewProductPage = () => {
  const [formData, setFormData] = useState<ProductDataType>({
    title: "",
    price: "",
    category: "" as ProductCategories,
    image: "",
  });
  const [category, setCategory] = useState<ProductCategories | "">("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const error = validateForm();
    if (error) {
      toast.error(error);
      return;
    }

    if (!formData.image) formData.image = "../src/assets/noImage.jpg";

    const productWithId: Product = {
      id: uuidv4(),
      title: formData.title.trim(),
      price: formData.price,
      category: formData.category,
      image: formData.image,
    };

    const storedProducts = localStorage.getItem("products");
    const productsList: Product[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    productsList.push(productWithId);
    localStorage.setItem("products", JSON.stringify(productsList));

    formRef.current?.reset();

    setFormData({
      title: "",
      price: "",
      category: "" as ProductCategories,
      image: "",
    });

    toast.success("New product successfully added");
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["category"]: category as ProductCategories,
    }));
  }, [category]);

  const validateForm = () => {
    if (!formData.title.trim() || !formData.category)
      return "Title, price and category fields required";

    const price = Number(formData.price);
    if (isNaN(price) || price <= 0)
      return "Price must be a number greater than 0";

    return null;
  };
  return (
    <form
      id="add-product-form"
      onSubmit={(e) => handleFormSubmit(e)}
      ref={formRef}
    >
      <h1 className="form-title">Add a new product!</h1>
      <Input
        type="url"
        placeholder="Enter a picture url..."
        name="image"
        value={formData.image}
        onChange={(e) => handleInputChange(e)}
        required={false}
      />
      <Input
        type="text"
        placeholder="Enter a product title..."
        name="title"
        value={formData.title}
        onChange={(e) => handleInputChange(e)}
        required={true}
      />
      <Input
        type="number"
        placeholder="Enter a price..."
        name="price"
        value={formData.price}
        onChange={(e) => handleInputChange(e)}
        required={true}
      />
      <CategoryFilter setCategory={setCategory} />
      <button type="submit">Submit</button>
      <Toaster />
    </form>
  );
};
