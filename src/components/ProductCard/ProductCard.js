import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";

// const ProductCard = ({
//   category,
//   description,
//   id,
//   image,
//   price,
//   rating,
//   title,
// })
const ProductCard = ({ products }) => {
  // console.log(id);

  return (
    <div className="cat-cards d-flex flex-wrap justify-content-evenly align-content-center">
      {products.map((allProd) => (
        <Card key={allProd.id} className="p-1 mb-4" style={{ width: "14rem" }}>
          <Link to={`/product/${allProd.id}`} className="nav-link">
            <Card.Img variant="top" height="200px" src={allProd.image} />
          </Link>
          <Card.Body>
            <Card.Title className="text-center">{allProd.title}</Card.Title>
            <Card.Text>Rating: {allProd.rating.rate}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default ProductCard;
