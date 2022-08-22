import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/pages/products/productSlice";
import cartReducer from "../src/pages/Cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartReducer,
  },
});

export default store;
