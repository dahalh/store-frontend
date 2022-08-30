import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";

const ProductCard = ({ chosenProduct }) => {
  const [clickedProduct, setClickedProduct] = useState({});

  const handleOnClick = (product) => {
    setClickedProduct(product);
    console.log(product);
  };

  return (
    // <div className="catCards d-flex flex-wrap justify-content-evenly align-content-center">
    <div className="catCards">
      {chosenProduct.map((product) => (
        <Card key={product._id} className="p-1 mb-4" style={{ width: "14rem" }}>
          <Card.Img
            variant="top"
            height="200px"
            // src={product.thumbnail.substr(7)}
            src={`http://localhost:8001/${product.thumbnail.substr(7)}`}
            crossOrigin="anonymous"
          />
          <Card.Body>
            <Card.Title className="text-center">{product.name}</Card.Title>
            <Card.Text>Rating: {product.ratings}</Card.Text>
          </Card.Body>
          <Link
            to={`/product/${product._id}`}
            className="nav-link d-flex align-items-center justify-content-center"
          >
            <Button
              onClick={() => handleOnClick(product)}
              className="product-click"
            >
              View
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
