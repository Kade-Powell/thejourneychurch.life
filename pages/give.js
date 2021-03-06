import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Gift } from "react-bootstrap-icons";
import { EasyTIthe } from "../components/EasyTIthe";

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
        <EasyTIthe />
      </Row>
    </>
  );
}
