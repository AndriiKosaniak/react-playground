import React from "react";

import { useAppSelector, useAppDispatch, remove } from "store";

export const Wishlist = () => {
  const wishlist = useAppSelector((state) => state.wishlist.value);
  const dispatch = useAppDispatch();

  if (!wishlist.length) return <h1>No products in wishlist</h1>;

  return (
    <div>
      {wishlist.map((product) => (
        <div key={product.id}>
          <h1>{product.title}</h1>
          <button onClick={() => dispatch(remove({ ...product }))}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};
