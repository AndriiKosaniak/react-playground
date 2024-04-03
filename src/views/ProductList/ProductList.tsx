import React, { useEffect, useState } from "react";

import { Product } from "types";
import { SingleProduct } from "./SingleProduct";
import classes from "./ProductList.module.css";

export const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

    if (!products.length) return <h1>Loading...</h1>;

  return (
    <div className={classes.productListWrapper}>
      {products.map((product) => (
        <SingleProduct
          key={product.id}
          id={product.id}
          title={product.title}
          image={product.image}
          category={product.category}
        />
      ))}
    </div>
  );
};
