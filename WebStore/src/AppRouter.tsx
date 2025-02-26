import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductsPage } from "./pages/ProductsPage/ProductsPage";
import { ProductPage } from "./pages/ProductPage/ProductPage";
import { AddNewProductPage } from "./pages/AddNewProductPage/AddNewProductPage";
import { Page404 } from "./pages/404Page/404Page";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/add-product" element={<AddNewProductPage />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </Router>
  );
};
