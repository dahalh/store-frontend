import "./cartPage.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import {
  decreaseItemsToCart,
  removeItemsFromCart,
  addItemsToCart,
} from "./cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const handleOnAddItem = (item) => {
    dispatch(addItemsToCart(item));
  };

  const handleOnDecreaseItem = (item) => {
    dispatch(decreaseItemsToCart(item));
  };

  const handleOnRemoveItem = (item) => {
    dispatch(removeItemsFromCart(item));
  };
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <DefaultLayout>
      <h3 className="cart-title">Cart</h3>
      <div className="cart-container">
        {cartItems.length === 0 ? (
          <div className="cart-empty">
            <p>You cart is currently empty</p>
            <div className="start-shopping">
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
                <span>Start Shopping</span>
              </Link>
            </div>
          </div>
        ) : (
          <>
            <div className="titles">
              <h3 className="product-title">Product</h3>
              <h3 className="price">Price</h3>
              <h3 className="quantity">Quantity</h3>
              <h3 className="total">Total</h3>
            </div>
            <div className="cart-items">
              {cartItems?.map((item) => (
                <div className="cart-item" key={item.id}>
                  <div className="cart-product">
                    <img src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      {/* <p>{item.description}</p> */}
                      <button onClick={() => handleOnRemoveItem(item)}>
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="cart-product-price">${item.price}</div>
                  <div className="cart-product-quantity">
                    <button onClick={() => handleOnDecreaseItem(item)}>
                      -
                    </button>
                    <div className="count">{item.qty}</div>
                    <button onClick={() => handleOnAddItem(item)}>+</button>
                  </div>
                  <div className="cart-product-total-price">
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              ))}
              <div className="cart-summary">
                <button className="clear-cart">Clear Cart</button>
                <div className="cart-checkout">
                  <div className="subtotal">
                    <span>Subtotal</span>
                    {/* <span className="amount">${cart.totalAmount}</span> */}
                  </div>
                  <p>Taxes and shipping calculated at checkout</p>
                  <button>Check out</button>
                  <div className="continue-shopping">
                    <Link to="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                        />
                      </svg>
                      <span>Continue Shopping</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Cart;
