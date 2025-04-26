import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './NavigationBar.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

function NavigationBar() {
  const { getTotalItems } = useContext(CartContext);
  const itemCount = getTotalItems();

  return (
    <Navbar bg="light" expand="lg" className="navigation-bar">
      <Container>
        <Navbar.Brand as={Link} to="/">Bike Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/cart">
              Carrito <FontAwesomeIcon icon={faShoppingCart} /> {itemCount > 0 && <span className="cart-count">{itemCount}</span>}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;