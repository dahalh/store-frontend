import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";
import pic1 from "../../carousel-images/pic1.jpg";
import pic2 from "../../carousel-images/pic2.jpg";
import pic3 from "../../carousel-images/pic-3.avif";
import pic4 from "../../carousel-images/pic4.jpg";
import pic5 from "../../carousel-images/pic5.jpg";
import pic6 from "../../carousel-images/pic6.jpg";
import pic7 from "../../carousel-images/pic7.webp";
import Container from "react-bootstrap/esm/Container";

const Slider = () => {
  return (
    <Container className="mt-4 mb-4 d-flex justify-content-center">
      <Carousel className="w-75">
        <Carousel.Item>
          <Link className="nav-link" to="/national">
            <img
              className="slider d-block w-100 img-thumbnail"
              // style={{ height: 400 }}
              src={pic6}
              alt="First slide"
            />
          </Link>
          <Carousel.Caption>
            <h3>National Team Jerseys</h3>
            <p>Browse Jerseys Worn By Your Favorite Teams</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="nav-link" to="/club">
            <img
              className="slider d-block w-100 img-thumbnail"
              src={pic7}
              alt="Second slide"
            />
          </Link>

          <Carousel.Caption>
            <h3>Club Jerseys</h3>
            <p>Browse Jerseys Worn By Your Favorite Teams</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Link className="nav-link" to="/nba">
            <img
              className="slider d-block w-100 img-thumbnail"
              src={pic5}
              alt="Third slide"
            />
          </Link>

          <Carousel.Caption>
            <h3>NBA Jerseys</h3>
            <p>Browse Jerseys Worn By Your Favorite NBA players</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Slider;
