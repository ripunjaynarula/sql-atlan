import MyComponent from "./MyComponent";
import { React, useEffect, useState } from "react";
import { Navbar, Nav, Container, Row, Col, Card } from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" variant="light" sticky="top">
        <Container>
          <Navbar.Brand>
            <img
              src={logo}
              alt="logo"
              style={{
                width: "45%",
                marginRight: "-80px",
                marginLeft: "-50px",
                marginTop: "-5%",
              }}
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Row style={{ marginTop: "10%" }} className="justify-content-center">
        <Col md={{ span: 6, offset: 0 }}>
          <input style={{ width: "50vw" }} />
        </Col>
      </Row>
      <Row style={{ marginTop: "5%", marginBottom:"1%" }} className="justify-content-center">
        <Card style={{maxWidth:"70vw"}}>
          <Card.Body><MyComponent /></Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default App;
