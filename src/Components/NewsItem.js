import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

function NewsItem(props) {
  return (
    <Card style={{width:'300px',margin:'20px'}}>
    <Card.Img variant="top" src={props.urlImage} style={{height:'250px'}} />
    <Card.Body>
      <Card.Title>{props.title}</Card.Title>
      <Card.Text>
        {props.desc}
      </Card.Text>
      <Button variant="primary" style={{backgroundColor:'white'}}><a href={props.url} style={{color:'black',textDecoration:'none'}}>Read More</a></Button>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">-{props.author}</small><br />
      <small className="text-muted">{props.date}</small>
      
    </Card.Footer>
  </Card>
  )
}

export default NewsItem
