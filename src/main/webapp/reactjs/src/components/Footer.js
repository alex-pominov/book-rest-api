import React from "react";
import { Navbar, Container, Col } from "react-bootstrap";

const Footer = () => {

  let fullYear = new Date().getFullYear();

  return (
    <Navbar fixed="bottom" bg="dark" variant="dark">
      <Container>
        <Col lg={12} className="text-center text-muted">
          <div>Developed by Alex @{fullYear}</div>
        </Col>
      </Container>
    </Navbar>
  );
};

export default Footer;
