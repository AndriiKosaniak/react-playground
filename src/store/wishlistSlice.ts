import { createSlice } from "@reduxjs/toolkit";

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    value: [],
  },
  reducers: {
    add: (state, { payload }) => {
      if (state.value.find((product) => product.id === payload.id)) return;
      state.value = [...state.value, payload];
    },
    remove: (state, { payload }) => {
      state.value = state.value.filter((product) => product.id !== payload.id);
    },
  },
});

export const { add, remove } = wishlistSlice.actions;

export default wishlistSlice.reducer;
