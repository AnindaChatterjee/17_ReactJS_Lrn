import {movies} from './data/movies.js';

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
                        <li className ="movie" key = {movie.id}>
                            <img src ={movie.poster}  alt = {movie.title} />
                            <p>
                                {movie.title} by {movie.director} 
                                was released on {movie.year}
                            </p>
                            <p>Rating: {movie.rating}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default MovieComponent