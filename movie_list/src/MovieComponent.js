import {movies} from './data/movies.js';
import Movie from './MovieList.js';
import './movies.css';


const fetchMovieData = () =>  {
    return movies;
}

const MovieComponent = () => {
    const movieData = fetchMovieData() ;
    return (
        <div className="movie-container">
            <h2>Movies</h2>
            <ul className="movies-list">
                {
                    movieData.map((movie)=>(
                    <Movie key={movie.id} movie= {movie}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent