import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Router>
  );
};
