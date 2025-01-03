import { Link } from "react-router-dom";
import HomePage from "../../pages/home_page/home_page.jsx";
import CartPage from "../../pages/cart_page/cart_page.jsx";
import ShoppingPage from "../../pages/shopping_page/shopping_page.jsx";
import router from "../../utils/routes.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; 

function Navbar() {
  return (
    <div>
    <h1>Hello</h1>
    <nav>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/shopping">Shopping</Link>
        </li>
      </ul>
    </nav>
  </div>
  );
}

export default Navbar;