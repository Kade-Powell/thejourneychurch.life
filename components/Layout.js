import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import logo from "../public/logo.png";

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
        <Container fluid="true">
          <Row style={{ width: "100%" }}>
            <Col>
              <Navbar.Brand>
                <Image src={logo} alt="The Journey Church" />
              </Navbar.Brand>
            </Col>
            <Col>{/*for spacing*/}</Col>

            <Col>
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
                      <Link href="/watch">
                        <Col>
                          <PlayBtn />
                          watch
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
      <Container fluid="true">{children}</Container>
    </Fragment>
  );
};

export default Layout;
