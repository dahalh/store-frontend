import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCartItems: (state, { payload }) => {
      // state.cartItems = payload;
      state.cartItems.push(payload);
    },
  },
});

const { reducer, actions } = cartSlice;

export const { setCartItems } = actions;
export default reducer;
