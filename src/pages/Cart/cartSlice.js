import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  cartQty: 0,
  cartTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      state.cartItems = payload;
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCartItems } = actions;
export default reducer;
