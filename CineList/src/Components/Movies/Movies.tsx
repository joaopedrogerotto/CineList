import MovieCard from "../MovieCard/MovieCard";
import type { Movie } from "../../types/Movie";
import "./Movies.css"
import { useEffect, useState } from "react";

interface MovieListProps{
    movies: Movie[]
}

function Movies({movies}: MovieListProps){
    const [moviesList, setMovies] = useState<Movie[]>(movies);

    useEffect(() => {setMovies(movies)}, [movies]); 

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

export default Movies;