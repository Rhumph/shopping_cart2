import { useState, useEffect } from "react";
import "./product_cards.css";

function ProductCard({ product }) {
  const prodimgurl = product.image;

  const [imageURL, setImageURL] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if (prodimgurl) {
      fetch(prodimgurl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("server error");
          }
          return response.blob();
        })
        .then((blob) => {
          const imageObjectURL = URL.createObjectURL(blob);
          setImageURL(imageObjectURL);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      setError(new Error("Image URL is undefined"));
    }
  }, [prodimgurl]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>A network error was encountered: {error.message}</p>;

  return (
      <div className="product-card">
        <img className="product-image" src={imageURL} alt="product picture" />
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <p className="product-price">Price: ${product.price}</p>
        <div className="add-field">
        <input type="number" name="product-quantity" id="product-quantity" placeholder="Quantity"/>
        <button className="add-to-cart-button" >Add</button>
        </div>
      </div>
  );
}

export default ProductCard;