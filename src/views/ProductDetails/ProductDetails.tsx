import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { add, useAppDispatch } from "store";
import { Product } from "types";

import classes from "./ProductDetails.module.css";

export const ProductDetails = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<Product>();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, product]);

  if (!product) return <h1>Loading...</h1>;

  return (
    <div className={classes.productWrapper}>
      <img src={product.image} alt={product.title} />
      <div>
        <h1>{product.title}</h1>
        <span>{product.price}$</span>
        <p>{product.description}</p>
        <label>{product.category}</label>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(add({ product }));
          }}
        >
          Add to wishlist
        </button>
      </div>
    </div>
  );
};
