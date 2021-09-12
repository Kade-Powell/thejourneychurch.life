import { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Newspaper } from "react-bootstrap-icons";
import { createClient } from "contentful";
import BlogPost from "../components/BlogPost";
export default function News() {
  const [newsFeed, setNewsFeed] = useState([]);
  useEffect(() => {
    try {
      const getNewsFeed = async () => {
        var client = createClient({
          space: "c1go21lvvgu7",
          accessToken: "uNzPA9aWvVsSCFYoRr2wN-jYvwoQKF9ZnVjezFeoPXA",
        });
        const response = await client.getEntries();
        console.log(response.items);
        setNewsFeed([...response.items]);
      };
      getNewsFeed();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Row>
        <Col className="text-center text-light bg-success mt-2">
          <h1>
            News and Announcments <Newspaper />
          </h1>
        </Col>
      </Row>

      {newsFeed.map((item, index) => (
        <BlogPost
          key={index}
          title={item.fields.title}
          postBody={item.fields.postBody}
          createdDate={item.fields.createdDate}
        />
      ))}
    </>
  );
}
