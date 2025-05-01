import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice"
import cartsReducer from "./CartSlice";
const store = configureStore({
  reducer: {
    products:productsReducer,
    carts:cartsReducer,
  },
});
export default store;
