import App from "../App";
import ShoppingPage from "../pages/shopping_page/shopping_page";
import CartPage from "../pages/cart_page/cart_page";
import HomePage from "../pages/home_page/home_page";

const router = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/shopping",
    element: <ShoppingPage />,
  },
];

export default router;