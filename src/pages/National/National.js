import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import DefaultLayout from "../layouts/DefaultLayout";
import nba from "../../carousel-images/nba.png";
const items = [
  {
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
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
          {items.map((jersey, i) => (
            <Card key={i} className="p-1 mb-4" style={{ width: "14rem" }}>
              <Card.Img variant="top" height="200px" src={jersey.image} />
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
