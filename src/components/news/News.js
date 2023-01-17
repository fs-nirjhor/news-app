import React from 'react';
import {Card,Col,Button} from "react-bootstrap";

const News = (props) => {
  const {article} = props;
  const random = Math.round(Math.random()*10);
return (
  <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={article.urlToImage} />
        <Card.Body>
          <Card.Title>
            {article.title}
          </Card.Title>
          <Card.Text>
            {article.description}
          </Card.Text>
          <Button href={article.url} variant="outline-primary">Show more</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last Updated {random} minites ago</small>
        </Card.Footer>
      </Card>
      </Col>
);
};

export default News;