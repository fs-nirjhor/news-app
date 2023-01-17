import React from 'react';
import {Card,Col,Button} from "react-bootstrap";

const News = (props) => {
  const {article} = props;
  const {title,description,url,image} = article;
  const random = Math.round(Math.random()*10);
return (
  <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>
            {title}
          </Card.Title>
          <Card.Text>
            {description}
          </Card.Text>
          <Button href={url} variant="outline-primary">Show more</Button>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last Updated {random} minites ago</small>
        </Card.Footer>
      </Card>
      </Col>
);
};

export default News;