import React from "react";
import Card from "react-bootstrap/esm/Card";
import { Link } from "react-router-dom";

const ProductCard = ({
  category,
  description,
  id,
  image,
  price,
  rating,
  title,
}) => {
  // console.log(id);

  return (
    <div>
      <Card key={id} className="p-1 mb-4" style={{ width: "14rem" }}>
        <Link to={`/product/${id}`} className="nav-link">
          <Card.Img variant="top" height="200px" src={image} />
        </Link>
        <Card.Body>
          <Card.Title className="text-center">{title}</Card.Title>
          <Card.Text>Rating: {rating}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
