import React from 'react';
import {Card,Button} from 'react-bootstrap';

const Heading = (props) => {
  const headingArticles = props.headingArticles; 
  const headingArticle = headingArticles.reduce((heading,article) => article,'');
return (
    <Card className="text-center">
      <Card.Header as="h3">Breaking News</Card.Header>
       <Card.Img variant="top" src={headingArticle.urlToImage} />
      <Card.Body>
        <Card.Title>
        {headingArticle.title}
        </Card.Title>
        <Card.Text>
          {headingArticle.description}
        </Card.Text>
        <Button href={headingArticle.url} variant="outline-primary">Show more</Button>
      </Card.Body>
    </Card>
);
};

export default Heading;