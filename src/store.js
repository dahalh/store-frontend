import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../src/pages/products/productSlice";
import categoryReducer from "../src/pages/products/categorySlice";
import cartReducer from "../src/pages/Cart/cartSlice";

const store = configureStore({
  reducer: {
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
  },
});

export default store;
