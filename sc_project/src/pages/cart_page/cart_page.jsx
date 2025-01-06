import { useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import { ShoppingCartContext } from "../../components/shopping_cart/shopping_cart";
import "./cart_page.css";

function CartPage() {
  const { cart } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <Navbar />
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <h2>{item.title}</h2>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default CartPage;