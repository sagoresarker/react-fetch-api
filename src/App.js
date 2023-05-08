import { useEffect, useState } from 'react';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';

// dce964c0
import './App.css'
const API_URL = 'http://www.omdbapi.com/?apikey=dce964c0'

const movie1 = {
        "Title": "Spiderman",
        "Year": "2010",
        "imdbID": "tt1785572",
        "Type": "movie",
        "Poster": "N/A"  
}

const App = () => { 

    const [movies, setMovies] = useState([])

    const searchMovie = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        setMovies(data.Search)
    }

    useEffect(() => {
        searchMovie('Spiderman');
    }, [])

    return (
        <div className='app'>
            <h1>MovieLand</h1>

            <div className='search'>
                <input 
                placeholder='Search for movie'
                value='Superman'
                onClick={() => {}}
                
                />

                <img 
                src={SearchIcon}
                alt='search icon'
                onClick={() => {}}
                
                />

            {movies?.length > 0 ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movie={movie} />
                    ))}
                </div>
            ) : (
            <div className="empty">
            <h2>No movies found</h2>
            </div>
      )}



            </div>
        </div>
    )
}

export default App; 