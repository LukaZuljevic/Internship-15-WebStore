import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "../components/Layout/Layout";
import { ProductsPage } from "../pages/ProductsPage/ProductsPage";
import { ProductPage } from "../pages/ProductPage/ProductPage";
import { AddNewProductPage } from "../pages/AddNewProductPage/AddNewProductPage";
import { Page404 } from "../pages/404Page/404Page";
import { ROUTES } from "./routes";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<ProductsPage />} />
          <Route path={ROUTES.PRODUCT_DETAILS} element={<ProductPage />} />
          <Route path={ROUTES.ADD_PRODUCT} element={<AddNewProductPage />} />
        </Route>
        <Route path={ROUTES.NOT_FOUND} element={<Page404 />} />
      </Routes>
    </Router>
  );
};
