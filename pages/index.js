import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import firstSlide from "../public/firstSlide.png";
import secondSlide from "../public/secondSlide.png";
import thirdSlide from "../public/thirdSlide.png";

import Carousel from "react-bootstrap/Carousel";
import { Map } from "react-bootstrap-icons";

export default function Home() {
  return (
    <>
      <Row>
        <Col>
          <Carousel>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={firstSlide}
                alt="First slide"
                layout="responsive"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={secondSlide}
                alt="Second slide"
                layout="responsive"
              />
            </Carousel.Item>
            <Carousel.Item>
              <Image
                className="d-block w-100"
                src={thirdSlide}
                alt="Third slide"
                layout="responsive"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="align-content-center">
        <Col xs={12} lg={6}>
          <Card>
            <Card.Header>
              <h3 className="text-center">
                Where to find us <Map className="text-info" />
              </h3>
            </Card.Header>
            <Card.Body>
              <Card.Text>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5823.6803263883285!2d-82.92475505929512!3d32.520746193005714!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xbc9f5d8c79fadf86!2sThe%20Journey%20Church!5e0!3m2!1sen!2sus!4v1630011503195!5m2!1sen!2sus"
                  allowFullScreen={false}
                  loading="lazy"
                  width="100%"
                ></iframe>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} lg={6}>
          <p className="card-companion-text">
            Our church building is located 1111 telfair fake address st. Right
            behind Radney Chiropractic, look for our sign by the driveway
          </p>

          <p>We look forward to seeing you!</p>
        </Col>
      </Row>
    </>
  );
}
