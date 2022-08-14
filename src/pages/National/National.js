import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import DefaultLayout from "../layouts/DefaultLayout";
import nba from "../../carousel-images/nba.png";
import { Link } from "react-router-dom";
const items = [
  {
    _id: "1",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: "2",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: "3",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: "4",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: "5",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: "6",
    title: "Jersey",
    image: nba,
    rating: "5",
  },
];
export const National = () => {
  return (
    <DefaultLayout>
      <Container className="mb-5 mt-5">
        <div className="cat-cards d-flex flex-wrap justify-content-evenly align-content-center">
          {items.map((jersey) => (
            <Card
              key={jersey._id}
              className="p-1 mb-4"
              style={{ width: "14rem" }}
            >
              <Link to={`/product/${jersey._id}`} className="nav-link">
                <Card.Img variant="top" height="200px" src={jersey.image} />
              </Link>
              <Card.Body>
                <Card.Title className="text-center">{jersey.title}</Card.Title>
                <Card.Text>Rating: {jersey.rating}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
    </DefaultLayout>
  );
};
