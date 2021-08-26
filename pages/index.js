import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Carousel from "react-bootstrap/Carousel";
import { GeoAlt } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/homeBanner.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="/blue.png"
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block w-100" src="/red.png" alt="Third slide" />

              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row>
        <Col>
          <h1>
            Where to find us <GeoAlt />
            <br />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5823.6803263883285!2d-82.92475505929512!3d32.520746193005714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc9f5d8c79fadf86!2sThe%20Journey%20Church!5e0!3m2!1sen!2sus!4v1630011503195!5m2!1sen!2sus"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </h1>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}
