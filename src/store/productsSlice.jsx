import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "productsSlice ",
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
