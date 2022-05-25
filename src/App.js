
import './App.css';
import React from 'react'
import Header from './Components/Header'
import MovieList from './Components/MovieList';
import AddModal from './Components/AddModal'
import {useState} from 'react';

function App() {
  const [film,setFilm]=useState([{
    name: "Titanic",
    description:
      "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
    Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
    rating: 4,
  },
  {
    name: "The Shawshank Redemption",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    Url:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkmMH-bEDUS2TmK8amBqgIMgrfzN1_mImChPuMrunA1XjNTSKm",
    rating: 3,
  },
  {
    name: "The Godfather",
    description:
      "An organized crime dynasty's aging patriarch transfers control of his clandestine empire to his reluctant son.",
    Url:
      "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY1200_CR107,0,630,1200_AL_.jpg",
    rating: 5,
  },
  {
    name: "The Dark Knight",
    description:
      "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest .",
    Url:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    rating: 2,
  },
  {
    name: "12 Angry Men",
    description:
      "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
    Url:
      "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film  %29.jpg",
    rating: 1,
  },
  {
    name: "Schindler's List",
    description:
      "In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish.",
    Url:
      "https://m.media-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    rating: 5,
  },
  {
    name: "Pulp Fiction",
    description:
      "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales.",
    Url: "https://www.miramax.com/media/assets/Pulp-Fiction1.png",
    rating: 5,
  },
  {
    name: "The Lord of the Rings: The Return of the King",
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach.",
    Url:
      "https://upload.wikimedia.org/wikipedia/en/b/be/The_Lord_of_the_Rings_-_The_Return_of_the_King_%282003%29.jpg",
    rating: 5,
  },
  {
    name: "The Good, the Bad and the Ugly",
    description:
      "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried.",
    Url:
      "https://cdn.hmv.com/r/w-1280/hmv/files/33/3385d6d7-570c-4baa-b344-552f9b6147f5.jpg",
    rating: 4,
  },
  {
    name: "Fight Club",
    description:
      "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something.",
    Url:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQNgTszE1phYg2G7H4RrgeSEssOw-Kpnh0Si-sF5pVQQrBXJ_6e",
    rating: 3,
  }  


])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rating, setrating] = useState(1)


const searchtext=(text)=>{
settext(text)
}
const searchrating=(rating)=>{
  setrating(rating)
  }
  return (
    <div>
        <div className="App">
    <Header searchtext={searchtext} searchrating={searchrating}/>
    <MovieList film={film} text={text} rate={rating}/>
    <AddModal add={add}/>

    </div>
    </div>
  )
}

export default App