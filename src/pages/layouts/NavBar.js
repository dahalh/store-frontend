import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import UserSidebar from "../../components/SideBar/Sidebar";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="">
              <i className="fa-solid fa-user fa-lg"></i>
            </Nav.Link>
            <Nav.Link href="">
              <i className="fa-solid fa-cart-shopping fa-lg"></i>
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                <i className="fa-solid fa-shirt fa-lg"></i>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            {/* <Nav.Link href="#pricing">Log In</Nav.Link> */}
          </Nav>

          <Navbar.Brand className="md-auto">
            <Link className="nav-link" to="/">
              Jersey Shop
            </Link>
          </Navbar.Brand>

          <Nav className="ms-auto mt-3">
            <InputGroup className="mb-3 w-75">
              <Form.Control placeholder="" />
              <Button variant="light" id="button-addon2">
                <i className="fa-solid fa-magnifying-glass"></i>
              </Button>
            </InputGroup>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
