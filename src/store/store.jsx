import { configureStore } from "@reduxjs/toolkit";
import {productSlice} from "./productsSlice"
const store = configureStore({
  reducer: {
    productSlice: productSlice.reducer
  },
});
export default store;
