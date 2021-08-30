import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Newspaper } from "react-bootstrap-icons";

export default function News() {
  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            News and Announcments <Newspaper />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          Need to build this page using on contentful so anyone can add posts
          here if they want
        </Col>
      </Row>
    </>
  );
}
