import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
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

      <Navbar className="navbar-cat">
        <Container className="d-flex justify-content-center">
          <Nav>
            <Nav.Link className="drop">
              <NavDropdown title="Category 1" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#/action-2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-3">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link className="drop">
              <NavDropdown title="Category 2" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#/action-2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-3">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>
            <Nav.Link className="drop">
              <NavDropdown title="Category 3" id="basic-nav-dropdown">
                <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#/action-2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#/action-3">
                  Something else
                </NavDropdown.Item>
              </NavDropdown>
            </Nav.Link>

            {/* <Nav.Link href="#pricing">Log In</Nav.Link> */}
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
