import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});
export const { addProducts } = productsSlice.actions;
export default productsSlice.reducer;
