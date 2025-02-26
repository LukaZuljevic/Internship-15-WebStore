import { useNavigate } from "react-router-dom";

export const Page404 = () => {
  const navigate = useNavigate();
  return (
    <div className="page-404">
      <h1>404</h1>
      <p>The page you are looking for does not exist.</p>
      <a onClick={() => navigate("/")} className="home-link">
        Go Back Home
      </a>
    </div>
  );
};
