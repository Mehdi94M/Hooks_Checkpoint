import React from 'react'
import MovieCard from './MovieCard'
import './Components.css';

function MovieList({film,text,rate}) {
 

  return (
    <div className="movies">
      {film.filter(el=>el.name.toLowerCase().includes(text.toLowerCase().trim())&& el.rating >= rate ).map(el=><MovieCard el={el} />)}
    </div>
    
  )
}

export default MovieList