import { useContext } from "react";
import Navbar from "../../components/navbar/navbar";
import { ShoppingCartContext } from "../../components/shopping_cart/shopping_cart";
import "./cart_page.css";

function CartPage() {
  const { cart, cartTotal, removeCartItem } = useContext(ShoppingCartContext);

  return (
    <div>
      <h1>Cart Page</h1>
      <Navbar />
      <div className="content">
        <div className="cart-items">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h2>{item.title}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button className="delete-button" onClick={() => removeCartItem(item)}>Remove Item</button>
            </div>
          ))}
        </div>
        <div className="checkout-section">
          <h2>Cart-Total:</h2>
          <h3>{cartTotal}</h3>
          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
