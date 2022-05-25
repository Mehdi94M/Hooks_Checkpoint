import React from 'react'
import { Card,ListGroup,ListGroupItem } from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";


function MovieCard({el}) {
  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={el.image}/> */}
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
              {el.description}
              </Card.Text>
           <a href={el.Url}>Watch it</a>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={el.rating}
              activeColor="#ffd700"
            /></div>
              <Card.Link href="#">ADD</Card.Link>
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default MovieCard
