import { Link } from "react-router-dom";
import "../styles/Header.css";

const Header = ({ name }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/product">Product</Link>
    </nav>
  );
};

export default Header;
