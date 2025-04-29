import { NavLink } from "react-router";
import "./button.css";

const NavItem = ({ to, children }) => {
  return (
    <NavLink
      to={to}
      viewTransition
      className={({ isActive }) =>
        ["button nav-item", isActive ? "active" : ""].join(" ")
      }
    >
      {children}
    </NavLink>
  );
};
export default NavItem;
