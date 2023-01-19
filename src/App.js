import "./App.css";
import News from "./components/news/News";
import Heading from "./components/heading/Heading";
import Navbar from "./components/navbar/Navbar";
import { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import axios from 'axios';

function App() {
  const [articles, setArticles] = useState([]);
  /*useEffect(() => {
    fetch(
      "https://gnews.io/api/v4/top-headlines?token=765ac2e88fa5ad490de1a20fbb046e96&topic=breaking-news&lang=en"
    )
      .then((res) => res.json())
      .then((data) => setArticles(data.articles));
  }, []);*/
  useEffect(() => {
    axios("https://gnews.io/api/v4/top-headlines?token=765ac2e88fa5ad490de1a20fbb046e96&topic=breaking-news&lang=en")
    .then((data) => setArticles(data.data.articles));
  }, []);
  return (
    <div className="App">
    <Navbar ></Navbar>
    
      <Heading headingArticles={articles}></Heading>
      <h3>Top News: {articles.length}</h3>
      <Row xs={1} md={2} className="g-4">
        {articles.map((article, index) => (
          <News article={article} key={index}></News>
        ))}
      </Row>
    </div>
  );
}

export default App;
