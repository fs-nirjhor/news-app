import './App.css';
import News from "./components/news/News";
import Heading from "./components/heading/Heading";
import { useState, useEffect } from "react";
import {Row} from "react-bootstrap";

function App() {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?q=tesla&from=2022-12-17&sortBy=publishedAt&apiKey=f90e40c27eb24dc0bef89da59476d3cd`)
    .then(res => res.json())
    .then(data => setArticles(data.articles) );
  }, []);
  return (
    <div className="App">
    <Heading headingArticles={articles}></Heading>
    <h3>Top News: {articles.length}</h3>
     <Row xs={1} md={2} className="g-4">
    { 
    articles.map((article,index) => <News article={article} key={index}></News>)
    }
     </Row>
    </div>
  );
}

export default App;
