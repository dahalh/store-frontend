import { setCartItems } from "./cartSlice";

export const addCartAction = (cart) => (dispatch) => {
  dispatch(setCartItems(cart));

  // console.log(cart);
};
