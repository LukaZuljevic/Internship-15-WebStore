import { Navigation } from "../Navigation/Navigation";
import { Outlet } from "react-router-dom";

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
