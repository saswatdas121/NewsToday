import React from 'react'
import NewsItem from './NewsItem.js'  
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from 'react';
import no_image from './no_image.jpg'
import Spinner from './Spinner.js'
import InfiniteScroll from "react-infinite-scroll-component";

function News(props) {

    const [articles,setArticles] =useState([]);
    const [page,setPage] =useState(1);
    const [totalResults,setTotalResults]=useState(0);
    let api=process.env.REACT_APP_NEWS_API;
   
   
    useEffect(()=>
    {
      const dataFetch=async ()=>
      {
         let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}&page=${page}&pageSize=6&category=${props.name}`);
         let data=await response.json();
         setTotalResults(data.totalResults);
        setArticles(data.articles);
      }
  
      dataFetch();
    },[page])
    
    let fetchMoreData =async ()=>
    {
       setPage(page+1);
       let response=await fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${api}&page=${page}&pageSize=6&category=${props.name}`);
       let data=await response.json();

       setArticles(articles.concat(data.articles));
    }
  return (
    <>
    


<InfiniteScroll
  dataLength={articles.length}
  next={fetchMoreData}
  hasMore={articles.length!==totalResults}
  loader={<Spinner/>}
  >
  <Container>
  <Row>
    {articles.map((element)=>
    {
      return <Col xs={12} md={4} key={element.url}>
         <NewsItem title={(element.title==null)?"":element.title.slice(0,50)} desc={(element.description==null)?"To Read more about this new.Tap Below":element.description.slice(0,88)} urlImage={element.urlToImage==null?no_image:element.urlToImage} url={element.url} author={element.author==null?"Unknown Author":element.author} date={new Date(element.publishedAt).toString()}/>
      </Col>
         
    })}
    
   
   </Row>
   </Container>
   </InfiniteScroll>



</>
   
  )
}

export default News
