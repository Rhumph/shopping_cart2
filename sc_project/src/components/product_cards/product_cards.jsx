import { useState, useEffect } from "react";

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
    <div>
      <div>
        <img src={imageURL} alt="product picture" />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;