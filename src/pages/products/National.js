import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import DefaultLayout from "../layouts/DefaultLayout";
import nba from "../../carousel-images/nba.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAction } from "./productAction";
import ProductCard from "../../components/ProductCard/ProductCard";

const items = [
  {
    _id: 1,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 2,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 3,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 4,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 5,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 6,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
  {
    _id: 7,
    title: "Jersey",
    image: nba,
    rating: "5",
  },
];

export const National = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProductsAction());
  }, []);

  // console.log(products);
  console.log(products.map((product) => product.id));
  console.log(items);

  return (
    <DefaultLayout>
      <Container className="mb-5 mt-5">
        <div className="cat-cards d-flex flex-wrap justify-content-evenly align-content-center">
          {items.map((prods) => (
            <Card
              key={prods._id}
              className="p-1 mb-4"
              style={{ width: "14rem" }}
            >
              <Link to={`/product/${prods._id}`} className="nav-link">
                <Card.Img variant="top" height="200px" src={prods.image} />
              </Link>
              <Card.Body>
                <Card.Title className="text-center">{prods.title}</Card.Title>
                <Card.Text>Rating: {prods.rating}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </Container>
      {/* <Container className="mb-5 mt-5">
        <div className="cat-cards d-flex flex-wrap justify-content-evenly align-content-center">
          {products.map((product) => {
            return (
              <ProductCard
                id={product.id}
                category={product.category}
                description={product.description}
                price={product.price}
                rating={product.rating}
                title={product.title}
              />
            );
          })}
        </div>
      </Container> */}
    </DefaultLayout>
  );
};
