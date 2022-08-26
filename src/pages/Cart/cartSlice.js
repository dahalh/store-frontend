import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // add items
    addItemsToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty++; //+= 1;
      } else {
        // const tempProduct = { ...payload, qty: payload.qty };
        // state.cartItems.push(tempProduct);
        state.cartItems.push(payload);
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // decrease items
    decreaseItemsToCart: (state, { payload }) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === payload.id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].qty--; //-= 1;
      }
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      if (state.cartItems[itemIndex].qty <= 0) {
        state.cartItems = newCartItem;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // completely remove items
    removeItemsFromCart: (state, { payload }) => {
      const newCartItem = state.cartItems.filter(
        (item) => item.id !== payload.id
      );
      state.cartItems = newCartItem;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // remove everything from cart
    emptyCart: (state, { payload }) => {
      state.cartItems = [];
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    // calculate prices
    calculatePrices: (state, { payload }) => {
      let { total, qty } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, qty } = cartItem;
          const itemTotal = price * qty;

          cartTotal.total += itemTotal;
          cartTotal.quantity += qty;

          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );

      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = qty;
      state.cartTotalAmount = total;
    },
  },
});

const { reducer, actions } = cartSlice;

export const {
  addItemsToCart,
  decreaseItemsToCart,
  removeItemsFromCart,
  emptyCart,
  calculatePrices,
} = actions;
export default reducer;
