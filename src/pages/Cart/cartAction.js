import { setCartItems } from "./cartSlice";

// export const addCartItems = (state, cart) => async (dispatch) => {
export const addCartItems = (cart) => async (dispatch) => {
  //   const cartItems = state.cartItems.push(cart);
  dispatch(setCartItems(...cart, cart));
  // dispatch(setCartItems(cart));

  console.log(cart);
};
