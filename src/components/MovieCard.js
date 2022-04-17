import axios from 'axios'
import React from 'react'
import '../styles/movie-card.css'
import MovieInfo from './MovieInfo'
const API_BASE_URL = 'https://www.omdbapi.com'
/*{
"Title": "Ram-Avtar",
"Year": "1988",
"imdbID": "tt0095955",
"Type": "movie",
"Poster": "https://m.media-amazon.com/images/M/MV5BYmI4ZGI2NzYtZWY4MC00YmNkLTg0MmItM2UyMDZmNmVmOGFlXkEyXkFqcGdeQXVyMjU4NDY1ODA@._V1_SX300.jpg"
}, */
export default function MovieCard({movie}) {
  console.log(movie.imdbID)
  const show = async (e)=>{
    const ShowInfo = await axios.get(API_BASE_URL+"/?i="+movie.imdbID+"&apikey=86affe22");
    console.log(ShowInfo.data)
  }
  return (
    <div className='movie-card'>
        <img src={movie.Poster} alt={movie.Title} 
        onClick={show}
        />
        <p>{movie.Title}</p>
        <p>Year: {movie.Year}</p>
    </div>
  )
}
