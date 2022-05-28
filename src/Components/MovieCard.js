import React from 'react'
import { Button, Card } from 'react-bootstrap';
import './Components.css';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


function MovieCard({el}) {
  return (
    <div>
       <div >
          
            <Card className="card" name="one" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={el.posterUrl}/>
            <Card.Body>
              <Card.Title>{el.name}</Card.Title>
              <Card.Text>
              {el.description}
              </Card.Text>

              <Link to={`/trailer/${el.id}`}>
                <Button variant='primary'>watch it</Button>
                </Link>
             <div className="star"> <ReactStars 
              count={5}
              edit={false}
              size={24}
              value={el.rate}
              activeColor="#ffd700"
            /></div>
          
            </Card.Body>
          </Card>
           
         </div>
    </div>
  )
}

export default MovieCard
