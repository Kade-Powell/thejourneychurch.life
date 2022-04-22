import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Gift } from "react-bootstrap-icons";
import Script from "next/script";

export default function Give() {
  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            How to Give <Gift />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Script
            src="https://forms.ministryforms.net/embed.aspx?formId=612566d4-e253-4641-bfc4-1e370b04e42f"
            strategy="beforeInteractive"
          />
        </Col>
      </Row>
    </>
  );
}
