import { React, useState } from "react";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Card,
  Button,
} from "react-bootstrap";
import logo from "./logo.svg";
import "./App.css";
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function App() {
  const [items, setItems] = useState([]);

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setItems(data);
      });
  };

  var m = getRandomInt(100);
  var n = 100 + getRandomInt(500);

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
          <input placeholder="Enter Query" style={{ width: "50vw" }} />
        </Col>
      </Row>
      <Button onClick={fetchData} style={{ marginTop: "1%" }} variant="primary">
        Execute
      </Button>
      <Row
        style={{ marginTop: "5%", marginBottom: "1%" }}
        className="justify-content-center"
      >
        <Card style={{ maxWidth: "70vw" }}>
          <Card.Body>
            <ul>
              {items.map((item,i) => (
                <p key={i}>
                  
                  {/* {(item.id>m && item.id<n)?{{item.name} {item.price}}:""} */}
                  {item.name} {item.price}
                </p>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Row>
    </div>
  );
}

export default App;
