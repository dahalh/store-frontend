import React from "react";
import Container from "react-bootstrap/esm/Container";
import pic1 from "../../carousel-images/pic1.jpg";

const MenWomen = () => {
  return (
    <Container>
      <div className="menWomen mb-5 d-flex justify-content-around">
        <img width="400" height="200" src={pic1} alt="pic1" />
        <img width="400" height="200" src={pic1} alt="pic2" />
      </div>
    </Container>
  );
};

export default MenWomen;
