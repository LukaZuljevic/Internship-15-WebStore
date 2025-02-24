import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { ProductPage } from "./pages/ProductsPage/ProductsPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<ProductPage />} />
        </Route>
      </Routes>
    </Router>
  );
};
