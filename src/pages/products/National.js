import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/esm/Card";
import DefaultLayout from "../layouts/DefaultLayout";
import nba from "../../carousel-images/nba.png";
import { Link, useParams } from "react-router-dom";
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
  }, [dispatch]);

  console.log("all", products);
  // console.log(products.map((product) => product.id));
  // console.log(items);

  return (
    <DefaultLayout>
      <Container className="mb-5 mt-5">
        <div>
          <ProductCard chosenProduct={products} />
        </div>
      </Container>
    </DefaultLayout>
  );
};
