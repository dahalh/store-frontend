import React, { useState, useRef } from "react";
import Container from "react-bootstrap/esm/Container";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../pages/layouts/DefaultLayout";
import Button from "react-bootstrap/esm/Button";
import { addItemsToCart } from "../../pages/Cart/cartSlice";

const ProductView = () => {
  const qtyRef = useRef(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [imageIndex, setImageIndex] = useState(0);
  // const [cart, setCart] = useState([]);
  const { products } = useSelector((state) => state.product);
  console.log(products);

  const { _id } = useParams();
  console.log(_id);
  // const product = products.find((product) => +product._id === +_id);
  // const product = products.filter((product) => product._id === _id);
  const product = products.find((item) => item._id === _id);
  console.log(product);

  const [chosenProduct, setChosenProduct] = useState(product);

  console.log(chosenProduct);

  const handleTab = (index) => {
    // alert(index);
    setImageIndex(index);
  };

  const handleOnClick = (item) => {
    // cart.push(item);
    let qty = qtyRef.current.value;
    console.log(qty);
    if (qty < 1) {
      qty = 1;
    }
    console.log(qty);
    const qtyObj = { qty, ...item };
    console.log(qtyObj);
    // dispatch(addItemsToCart(item));
    dispatch(addItemsToCart(qtyObj));
  };

  return (
    <DefaultLayout className="prodView">
      <Container>
        <div className="mt-3 mb-3">
          <Button variant="none" onClick={() => navigate(-1)}>
            <i className="fa-solid fa-arrow-left"></i> Back
          </Button>
        </div>
        <div className="details">
          <div className="big-img">
            <img
              src={`http://localhost:8001/${chosenProduct.images[
                imageIndex
              ].substr(7)}`}
              alt=""
              crossOrigin="anonymous"
            />
          </div>
          <div className="box">
            <div className="row">
              <h2>{chosenProduct.name}</h2>
              <span>${chosenProduct.price}</span>
            </div>

            <p>{chosenProduct.description}</p>

            <div className="thumb">
              {chosenProduct.images.map((img, index) => (
                <img
                  src={`http://localhost:8001/${img.substr(7)}`}
                  className={index === imageIndex ? "active" : ""}
                  alt=""
                  crossOrigin="anonymous"
                  key={index}
                  onClick={() => handleTab(index)}
                />
              ))}
            </div>

            <div className="mt-4">
              Quantity:
              <input className="quantity" ref={qtyRef} type="number" />
            </div>

            <button
              onClick={() => handleOnClick(chosenProduct)}
              className="addCart"
            >
              Add to cart
            </button>
          </div>
        </div>
      </Container>
    </DefaultLayout>
  );
};

export default ProductView;
