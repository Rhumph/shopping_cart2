async function RetrieveProducts() {
  const response = await fetch("https://fakestoreapi.com/products");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const data = await response.json();
  return data;
}

export default RetrieveProducts;