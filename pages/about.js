import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function About() {
  return (
    <>
      <Row>
        <Col>
          <img
            src="/about.png"
            alt="About Us"
            style={{
              width: "15%",
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <p>
            Heres where i will put more about info and have many more sections
            for stuff and things
          </p>
        </Col>
      </Row>
    </>
  );
}
