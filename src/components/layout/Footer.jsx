import React from 'react';
import './Footer.css';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="footer mt-5 bg-light py-3">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Bike Market. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
}

export default Footer;