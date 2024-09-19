// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ProductsIndex } from "./ProductsIndex";
import { ProductsNew } from "./ProductsNew";

export function ProductsPage() {
  const [products, setProducts] = useState([]);

  const handleIndex = () => {
    axios
      .get("http://localhost:3000/products.json", {
        withCredentials: true,
      })
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching products:", error.response ? error.response.data : error.message);
      });
  };

  useEffect(() => {
    handleIndex();
  }, []);

  return (
    <div>
      <ProductsNew />
      <ProductsIndex products={products} />
    </div>
  );
}
