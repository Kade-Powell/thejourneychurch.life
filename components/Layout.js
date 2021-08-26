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
            <Col>
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
            <Col>{/*for spacing*/}</Col>

            <Col>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="text-end">
                  <Nav.Link>
                    <Link href="/">
                      <div>
                        <HouseDoor />
                        home
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/about">
                      <div>
                        <InfoCircle />
                        about
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/events">
                      <div>
                        <CalendarEvent />
                        events
                      </div>
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link href="/sermons">
                      <div>
                        <PlayBtn />
                        sermons
                      </div>
                    </Link>
                  </Nav.Link>
                  <NavDropdown title="Dropdown" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item eventKey="4.3">
                      Something else here
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item eventKey="4.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
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
