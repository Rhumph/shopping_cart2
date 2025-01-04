import { useEffect, useState } from "react";

function RetrieveProducts() {

  const [products, setProducts] = useState([]);

useEffect(() => {
    fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
}, []);

return products;

}

export default RetrieveProducts;