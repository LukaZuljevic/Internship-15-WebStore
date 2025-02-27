import { useNavigate } from "react-router-dom";
import "./Navigation.css";
import { ROUTES } from "../../router/routes";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <h1 className="navigation__title">MARKETPLACE APP</h1>
      <ul className="navigation__list">
        <li onClick={() => navigate(ROUTES.HOME)}>Products page</li>
        <li onClick={() => navigate(ROUTES.ADD_PRODUCT)}>Add new product</li>
      </ul>
    </nav>
  );
};
