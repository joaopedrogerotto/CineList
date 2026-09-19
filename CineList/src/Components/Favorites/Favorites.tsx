import { useState } from "react";
import type { Movie } from "../../types/Movie";
import MovieCard from "../MovieCard/MovieCard";

interface MovieListProps{
    movies: Movie[]
}

function Favorites({movies}: MovieListProps){
    const moviesFavorites = movies.filter(m => m.favorite);
    const [moviesList, setMovies] = useState<Movie[]>(moviesFavorites);

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

export default Favorites;