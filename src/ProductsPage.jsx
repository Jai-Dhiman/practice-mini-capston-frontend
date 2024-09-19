import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";
import { useState, useEffect } from "react";
import axios from "axios";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/products.json")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching products:", error);
      });
  };

  useEffect(handleIndex, []);
  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}
