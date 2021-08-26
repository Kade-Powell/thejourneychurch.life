import { Fragment } from "react";
import Head from "next/head";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import {
  CalendarEvent,
  HouseDoor,
  InfoCircle,
  PlayBtn,
} from "react-bootstrap-icons";

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Head>
        <title>The Journey Church</title>
        <meta name="description" content="The Journey Church In Dublin GA" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar className="sticky-top" bg="light" expand="lg">
        <Container fluid>
          <Row style={{ width: "100%" }}>
            <Col fluid={true}>
              <Navbar.Brand>
                <img
                  src="/logo.png"
                  alt="The Journey Church"
                  style={{
                    width: "11rem",
                  }}
                />
              </Navbar.Brand>
            </Col>
            <Col></Col>

            <Col fluid={true}>
              <Row className="text-end">
                <Col>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                </Col>
              </Row>

              <Row>
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav>
                    <Nav.Link>
                      <Link href="/">
                        <Col>
                          <HouseDoor />
                          home
                        </Col>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link href="/about">
                        <Col>
                          <InfoCircle />
                          about
                        </Col>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link href="/events">
                        <Col>
                          <CalendarEvent />
                          events
                        </Col>
                      </Link>
                    </Nav.Link>
                    <Nav.Link>
                      <Link href="/sermons">
                        <Col>
                          <PlayBtn />
                          sermons
                        </Col>
                      </Link>
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Row>
            </Col>
          </Row>
        </Container>
      </Navbar>
      <Container fluid className="bg-dark text-light">
        {children}
      </Container>
    </Fragment>
  );
};

export default Layout;
