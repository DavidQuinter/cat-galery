import { Outlet } from "react-router";
import { NavBar } from "../components/navBar/navBar";
import "./index.css";

const index = () => {
  return (
    <div className="layout">
      <header className="header">
        <NavBar />
      </header>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};
export default index;
