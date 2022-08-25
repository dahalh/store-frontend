import React, { useEffect } from "react";
import { Button, Container, Table } from "react-bootstrap";
import DefaultLayout from "../layouts/DefaultLayout";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItemsToCart,
  removeItemsFromCart,
  addItemsToCart,
} from "./cartSlice";

const CartPage = () => {
  // const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

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

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // }, [cartItems]);

  return (
    <DefaultLayout>
      <Container>
        {cartItems.length > 0 ? (
          <Table striped>
            <thead>
              <tr>
                <th>Item</th>
                <th>Qty</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr>
                  <td>
                    <div className="d-flex">
                      <div className="m-1">
                        <img
                          key={item.id}
                          style={{ width: "100px", height: "100px" }}
                          // src={`http://localhost:8001/${item.images[0].substr(
                          //   7
                          // )}`}
                          src={item.image}
                          crossorigin="anonymous"
                          alt=""
                        />
                      </div>
                      <div>
                        <h6>{item.title}</h6>
                        <p>${item.price}</p>

                        <Button
                          onClick={() => handleOnRemoveItem(item)}
                          className="btn-sm"
                          variant="danger"
                        >
                          Remove
                        </Button>
                      </div>
                    </div>
                  </td>
                  <td>
                    <div className="d-flex">
                      <Button
                        onClick={() => handleOnDecreaseItem(item)}
                        className="btn-sm m-1"
                      >
                        -
                      </Button>
                      <span className="fs-5">{item.qty}</span>
                      <Button
                        onClick={() => handleOnAddItem(item)}
                        className=" btn-sm m-1"
                      >
                        +
                      </Button>
                    </div>
                  </td>
                  <td>${(item.price * item.qty).toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <div className="text-center">
            <h1 className="text-danger">
              Cart is Empty. Please add our products to checkout!
            </h1>
            <img
              src="https://cdn.dribbble.com/users/844846/screenshots/2981974/media/ae264d741cae09c2377235d9705f9cbc.png?compress=1&resize=800x600&vertical=top"
              alt=""
            />
          </div>
        )}
      </Container>
    </DefaultLayout>
  );
};

export default CartPage;
