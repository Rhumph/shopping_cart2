import Navbar from "../../components/navbar/navbar";
import RetrieveProducts from "../../services/store_api";
import ProductCard from "../../components/product_cards/product_cards";
import { useState, useEffect } from "react";
import "./shopping_page.css";
// import { ShoppingCartProvider } from "../../components/shopping_cart/shopping_cart";

function ShoppingPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      const retrievedProducts = await RetrieveProducts();
      setProducts(retrievedProducts);
    }
    fetchProducts();
  }, []);

  return (
    // <ShoppingCartProvider>
    <div>
      <Navbar />
      <h1>Shopping Page</h1>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
    // </ShoppingCartProvider>
  );
}

export default ShoppingPage;