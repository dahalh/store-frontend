import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import UserSidebar from "../../components/SideBar/Sidebar";
import Button from "react-bootstrap/esm/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategoriesAction } from "../products/categoryAction";

const NavBar = () => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.category);

  useEffect(() => {
    dispatch(fetchCategoriesAction());
  }, [dispatch]);

  const parentCategories = categories.filter((item) => !item.parentCatId);
  const subCategories = categories.filter((item) => item.parentCatId);

  const { cartItems } = useSelector((state) => state.cart);
  const numItems = cartItems.length;

  return (
    <>
      <Navbar className="navbar">
        <Container>
          <Nav className="me-auto">
            <Link className="nav-link" to="">
              <i className="fa-solid fa-user fa-lg"></i>
            </Link>

            {/* <Nav.Link href="#pricing">Log In</Nav.Link> */}
          </Nav>

          <Navbar.Brand className="md-auto">
            <Link className="nav-link" to="/">
              Jersey Store
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

          <Nav>
            <Link className="nav-link" to="/cart">
              <div className="cart">
                <span>
                  <i className="fa-solid fa-cart-shopping fa-lg"></i>
                </span>
                {/* <span>1</span> */}
                <span>{numItems > 0 ? numItems : "0"}</span>
              </div>
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Navbar className="navbar-cat">
        <Container className="d-flex justify-content-center">
          <Nav>
            <Nav.Link className="drop">
              <NavDropdown title="Category 1" id="basic-nav-dropdown">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
                <Link className="nav-link" to="">
                  <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                </Link>
                <Link className="nav-link" to="">
                  <NavDropdown.Item href="#/action-1">Action</NavDropdown.Item>
                </Link>
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
