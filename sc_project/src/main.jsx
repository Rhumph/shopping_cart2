import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ShoppingCartProvider } from "./components/shopping_cart/shopping_cart";
import router from "./utils/routes";

const routes = createBrowserRouter(router);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShoppingCartProvider>
      <RouterProvider router={routes} />
    </ShoppingCartProvider>
  </StrictMode>
);