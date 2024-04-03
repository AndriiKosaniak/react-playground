import React from "react";
import { Link } from "react-router-dom";

import { routes } from "router";
import { add, useAppDispatch } from "store";
import classes from "./SingleProduct.module.css";

import { Product } from "types";

type SingleProductProps = Product;

export const SingleProduct = ({
  id,
  title,
  image,
  category,
}: SingleProductProps) => {
  const dispatch = useAppDispatch();

  return (
    <Link to={routes.products + `/${id}`} className={classes.productTile}>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <label>{category}</label>
      <button
        onClick={(e) => {
          e.preventDefault();
          dispatch(add({ id, title, image, category }));
        }}
      >
        Add to wishlist
      </button>
    </Link>
  );
};
