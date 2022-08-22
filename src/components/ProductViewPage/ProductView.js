import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../../pages/layouts/DefaultLayout";
import { fetchProductsAction } from "../../pages/products/productAction";

const displayProducts = [
  {
    _id: "1",
    title: "Nike Shoes",
    src: [
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/300bd51f-3ce1-473c-95d2-f8053a327a7d/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e2159ba1-3625-4604-ac79-64355a8b67b0/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/4c76b49a-1e27-46d4-99ca-7a99a0306113/zion-2-basketball-shoes-XjhskN.png",
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ccae9e3e-2f66-45db-9384-3a26815b6815/zion-2-basketball-shoes-XjhskN.png",
    ],
    description: "Zion 2",
    content: "The New Zion Shoes",
    price: 230,
    colors: ["red", "black", "crimson", "teal"],
    count: 1,
  },
];

const ProductView = () => {
  const dispatch = useDispatch();
  const [imageIndex, setImageIndex] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);

  const { products } = useSelector((state) => state.product);

  const { id } = useParams();
  const product = products.find((product) => +product.id === +id);
  const [chosenProduct, setChosenProduct] = useState(product);
  console.log(product);
  // setChosenProduct(product);
  // console.log(chosenProduct);

  // useEffect(() => {
  //   dispatch(fetchProductsAction());
  // }, []);

  const handleTab = (index) => {
    // alert(index);
    setImageIndex(index);
  };

  const handleOnClick = (item) => {
    cart.push(item);
    console.log(cart);
  };

  return (
    <DefaultLayout className="prodView">
      <Container>
        <div className="details">
          <div className="big-img">
            {/* <img src={item.src[index]} alt="" /> */}
            {/* <img src={chosenProduct.image[imageIndex]} alt="" /> */}
            <img src={chosenProduct.image} alt="" />
          </div>
          <div className="box">
            <div className="row">
              <h2>{chosenProduct.title}</h2>
              <span>${chosenProduct.price}</span>
            </div>

            <p>{chosenProduct.description}</p>

            <div className="thumb">
              {/* {chosenProduct.image.map((image, index) => ( */}
              <img
                src={chosenProduct.image}
                // className={index === imageIndex ? "active" : ""}
                alt=""
                // key={index}
                // onClick={() => handleTab(index)}
              />
              {/* ))} */}
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
