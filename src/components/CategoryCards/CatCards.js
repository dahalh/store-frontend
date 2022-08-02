import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/esm/Container";
import pic1 from "../../carousel-images/pic1.jpg";
import pic2 from "../../carousel-images/pic2.jpg";
import pic3 from "../../carousel-images/pic-3.avif";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const items = [
  {
    title: "Arsenal",
    image: pic2,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, cum",
  },

  {
    title: "Random",
    image: pic1,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, cum",
  },
  {
    title: "Brazil",
    image: pic3,
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, cum",
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
              <Card.Text>{jersey.desc}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

export default CatCards;
