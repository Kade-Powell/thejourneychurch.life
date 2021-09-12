import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Calendar2Check } from "react-bootstrap-icons";

export default function Events() {
  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            Schedule and Events <Calendar2Check />
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <iframe
            src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=America%2FNew_York&src=dGhlam91cm5leWNodXJjaC5saWZlQGdtYWlsLmNvbQ&color=%23039BE5&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=1&showTz=0"
            style={{ borderWidth: "0" }}
            width="600"
            height="400"
            frameBorder="0"
            scrolling="no"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className="text-center">
          <h5>Small groups meet every Sunday night.</h5>
          <p>
            Small groups do not have a set time to meet, your small group leader
            can tell you what time and where to meet.
          </p>
          <p>
            If you are not in a small group but would like to be send us an{" "}
            <a href="mailto:info@thejourneychurch.life">email!</a>
          </p>
        </Col>
      </Row>
    </>
  );
}
