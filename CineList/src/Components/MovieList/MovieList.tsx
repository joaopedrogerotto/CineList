import MovieCard from "../MovieCard/MovieCard";
import type { Movie } from "../../types/Movie";
import "./MovieList.css"
import { useState } from "react";

interface MovieListProps{
    movies: Movie[]
}

function MovieList({movies}: MovieListProps){
    const [moviesList, setMovies] = useState<Movie[]>(movies);

    function changeFavoriteMovie(idMovie: number){
        setMovies(currentMovies =>
            currentMovies.map(m => m.id === idMovie ? {...m, favorite: !m.favorite }: m)
        );
    }

    return(
        <div className="gridMovieList">
            {moviesList.map((movie) =>(
                <MovieCard 
                    key={movie.id} 
                    movie={movie} 
                    onChangeFavorite={changeFavoriteMovie}
                />
            ))}
        </div>
        
    )
}

export default MovieList;