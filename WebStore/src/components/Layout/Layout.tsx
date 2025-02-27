import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";
import "./Layout.css";

export const Layout = () => {
  return (
    <div className="page">
      <Navigation />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
