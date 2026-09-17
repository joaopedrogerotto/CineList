import MovieCard from "../MovieCard/MovieCard";
import type { Movie } from "../../types/Movie";
import "./MovieList.css"

interface MovieListProps{
    movies: Movie[]
}

function MovieList({movies}: MovieListProps){
    return(
        <div className="gridMovieList">
            {movies.map((movie) =>(
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            ))}
        </div>
    )
}

export default MovieList;