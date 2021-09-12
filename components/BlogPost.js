import PropTypes from "prop-types";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
const BlogPost = ({ title, postBody, createdDate }) => {
  return (
    <Row>
      <Col className="align-self-center">
        <Card>
          <Card.Header className="bg-info text-light">{title}</Card.Header>
          <Card.Body>{documentToReactComponents(postBody)}</Card.Body>
          <Card.Footer className="text-muted">{createdDate}</Card.Footer>
        </Card>
      </Col>
    </Row>
  );
};

BlogPost.propTypes = {
  title: PropTypes.string.isRequired,
  postBody: PropTypes.object.isRequired,
};

export default BlogPost;
