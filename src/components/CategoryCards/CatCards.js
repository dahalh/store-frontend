import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import pic1 from "../../carousel-images/pic1.jpg";
import pic2 from "../../carousel-images/pic2.jpg";
import pic3 from "../../carousel-images/pic-3.avif";
import { Link } from "react-router-dom";

const items = [
  {
    title: "Arsenal",
    image: pic2,
  },

  {
    title: "Random",
    image: pic1,
  },
  {
    title: "Brazil",
    image: pic3,
  },
];

const CatCards = () => {
  return (
    <Container className="mb-5">
      <h3 className="text-center mb-4">Popular Items</h3>
      <div className="cat-cards d-flex flex-wrap justify-content-around">
        {items.map((jersey, i) => (
          <Card key={i} className="p-2 mb-3" style={{ width: "14rem" }}>
            <Card.Img variant="top" height="300px" src={jersey.image} />
            <Card.Body>
              <Card.Title className="text-center">{jersey.title}</Card.Title>
            </Card.Body>
          </Card>
        ))}
        <div className="d-flex justify-content-center align-items-center">
          <Link className="nav-link" id="view-more" to="/">
            <i
              style={{ color: "blue", fontweight: "bold", fontsize: "150%" }}
              className="fa-solid fa-arrow-right-long"
            ></i>
            View More
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default CatCards;
