import { FunnelPlus, Shuffle } from "lucide-react";
import NavItem from "../ui/button/navItem";
import "./navBar.css"
export const NavBar = () => {
  return (
    <nav className="nav-bar">
      <NavItem to="/">
        Random <Shuffle size={20} />
      </NavItem>
      <NavItem to="/filter">
        Filter <FunnelPlus size={20} />
      </NavItem>
    </nav>
  );
};
