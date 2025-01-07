import { Link } from "react-router-dom";
import "./navbar.css";
import { ShoppingCartContext } from "../shopping_cart/shopping_cart";
import { useContext } from "react";

function Navbar() {
  const { cartLength } = useContext(ShoppingCartContext);

  return (
    // <ShoppingCartProvider>
    <nav>
      <div className="nav-links">
        <div className="page-links">
          <Link to="/home" className="link">Home</Link>
          <Link to="/shopping" className="link">Shopping</Link>
        </div>
        <div className="cart-link">
          <Link to="/cart" className="link">Cart: {cartLength()}</Link>
        </div>
      </div>
    </nav>
    // </ShoppingCartProvider>
  );
}

export default Navbar;