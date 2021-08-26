import Head from "next/head";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import { CaretRightFill } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Journey Church</title>
        <meta name="description" content="The Journey Church In Dublin GA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Container fluid>
          <Row style={{ width: "100%" }}>
            <Col>
              <Navbar.Brand>
                <img
                  src="/logo.png"
                  alt="The Journey Church"
                  style={{
                    width: "250px",
                  }}
                />
              </Navbar.Brand>
            </Col>
            <Col>
              <img
                src="/arrows.png"
                style={{
                  width: "200px",
                }}
                className="float-end align-bottom"
              />
            </Col>

            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-end">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark text-light">
        put some stuff here later
      </Container>
    </>
  );
}
