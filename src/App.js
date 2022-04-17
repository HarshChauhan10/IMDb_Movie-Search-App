import './App.css';
import { useState } from 'react';
import { NavBar,MovieList,ShowInfo } from './components/index';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import axios from 'axios'

const API_BASE_URL = 'https://www.omdbapi.com'
// &apikey=86affe22
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [movies, setMovies] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [details, setDetails] = useState([])





  const search = async (e) => { 
    if(e.code==="Enter")
    {
      setIsLoading(true)
      console.log(inputValue);
      const response = await axios.get(API_BASE_URL+"/?s="+inputValue+"&apikey=86affe22")
      console.log(response.data);
      setMovies(response.data.Search);
      setIsLoading(false)
    }
};

  return (
    <div className="main">
    {/* NavBar */}
    <NavBar search={search} inputValue={inputValue} setInputValue={setInputValue} />
    {/* Search */}
    {/* MovieList */}
    <MovieList isLoading={isLoading} movieList={movies}/> 
    </div>
  );
  }

export default App;
