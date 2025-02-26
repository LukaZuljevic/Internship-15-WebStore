import { useEffect, useState, useRef } from "react";
import { CategoryFilter } from "../../components/Filters/CategoryFilter/CategoryFilter";
import { productCategories } from "../../types/product";
import { Input } from "../../components/Input/Input";
import toast, { Toaster } from "react-hot-toast";

type formDataType = {
  title: string;
  price: string;
  category: productCategories;
  image: string;
};

export const AddNewProductPage = () => {
  const [formData, setFormData] = useState<formDataType>({
    title: "",
    price: "",
    category: "" as productCategories,
    image: "",
  });
  const [category, setCategory] = useState<productCategories | "">("");
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

    const storedProducts = localStorage.getItem("products");
    const productsList: formDataType[] = storedProducts
      ? JSON.parse(storedProducts)
      : [];

    productsList.push(formData);
    localStorage.setItem("products", JSON.stringify(productsList));

    formRef.current?.reset();

    setFormData({
      title: "",
      price: "",
      category: "" as productCategories,
      image: "",
    });

    toast.success("New product successfully added");
  };

  useEffect(() => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ["category"]: category as productCategories,
    }));
  }, [category]);

  const validateForm = () => {
    if (!formData.title || !formData.category || !formData.image)
      return "All fields required";

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
      />
      <Input
        type="text"
        placeholder="Enter a product title..."
        name="title"
        value={formData.title}
        onChange={(e) => handleInputChange(e)}
      />
      <Input
        type="number"
        placeholder="Enter a price..."
        name="price"
        value={formData.price}
        onChange={(e) => handleInputChange(e)}
      />
      <CategoryFilter setCategory={setCategory} />
      <button type="submit">Submit</button>
      <Toaster />
    </form>
  );
};
