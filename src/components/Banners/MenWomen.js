import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/esm/Container";
import pic1 from "../../carousel-images/pic1.jpg";

/* <img width="400" height="200" src={pic1} alt="pic1" /> */

const MenWomen = () => {
  return (
    <Container className="mb-5 d-flex flex-wrap justify-content-center align-content-center">
      <h2>Men or Womens</h2>
      <Row>
        {/* <Col>1 of 2</Col>
        <Col>2 of 2</Col> */}
        <Col className="mb-3">
          <img width="600" height="300" src={pic1} alt="pic1" />
        </Col>
        <Col>
          <img width="600" height="300" src={pic1} alt="pic1" />
        </Col>
      </Row>
    </Container>
  );
};

export default MenWomen;
