import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Heading = (props) => {
  const headingArticles = props.headingArticles; 
  const headingArticle = headingArticles.reduce((heading,article) => article,'');
  const {title,description,url,image} = headingArticle;
return (
    <Card className="text-center">
      <Card.Header as="h3">Breaking News</Card.Header>
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
    </Card>
);
};

export default Heading;