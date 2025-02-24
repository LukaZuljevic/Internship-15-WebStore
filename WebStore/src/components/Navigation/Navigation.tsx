import { useNavigate } from "react-router-dom";

export const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="navigation">
      <h1 className="navigation__title">MARKETPLACE APP</h1>
      <ul className="navigation__list">
        <li onClick={() => navigate("/")}>Products page</li>
        <li onClick={() => navigate("/add-product")}>Add new product</li>
      </ul>
    </nav>
  );
};
