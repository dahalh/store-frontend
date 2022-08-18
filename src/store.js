import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/pages/products/productSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
  },
});

export default store;
