import { AppRouter } from "./AppRouter.tsx";
import "./App.css";
import "./components/Navigation/Navigation.css";
import "./components/Layout/Layout.css";
import "./components/ProductCard/ProductCard.css";
import "./pages/ProductsPage/ProductsPage.css";
import "./components/Filters/CategoryFilter/CategoryFilter.css";
import "./components/Filters/SearchFilter/SearchFilter.css";

function App() {
  return <AppRouter />;
}

export default App;
