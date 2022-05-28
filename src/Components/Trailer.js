import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

function Trailer({movies}) {
  const navigate=useNavigate()
  const { id } = useParams();
  const movie = movies.find(movie => movie.id === Number(id));
  return (
      <>
    <div >

<iframe width="560" height="315" src={movie.frameUrl}
 title="YouTube video player"
  frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
 allowfullscreen></iframe></div>
 <div>
<Button variant='danger' onClick={()=>navigate("/")}>go back</Button>
    </div></>
  )
}

export default Trailer