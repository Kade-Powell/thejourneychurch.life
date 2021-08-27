import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

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
  const router = useRouter();

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
                <Col>
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                      <Link href="/">
                        <a
                          className={
                            router.pathname == "/"
                              ? "nav-item nav-link  text-success"
                              : "nav-item nav-link"
                          }
                        >
                          <HouseDoor />
                          home
                        </a>
                      </Link>

                      <Link href="/about" className="nav-item nav-link">
                        <a
                          className={
                            router.pathname == "/about"
                              ? "nav-item nav-link  text-success"
                              : "nav-item nav-link"
                          }
                        >
                          <InfoCircle />
                          about
                        </a>
                      </Link>

                      <Link href="/events" className="nav-item nav-link">
                        <a
                          className={
                            router.pathname == "/events"
                              ? "nav-item nav-link  text-success"
                              : "nav-item nav-link"
                          }
                        >
                          <CalendarEvent />
                          events
                        </a>
                      </Link>
                      <Link href="/watch" className="nav-item nav-link">
                        <a
                          className={
                            router.pathname == "/watch"
                              ? "nav-item nav-link  text-success "
                              : "nav-item nav-link"
                          }
                        >
                          <PlayBtn />
                          watch
                        </a>
                      </Link>
                    </Nav>
                  </Navbar.Collapse>
                </Col>
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
