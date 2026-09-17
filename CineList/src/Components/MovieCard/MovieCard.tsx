import type { Movie } from "../../types/Movie";
import "./MovieCard.css"

interface MovieCardProps {
    movie: Movie;
}


function MovieCard({movie}:MovieCardProps){
    return(
        <div className="cardMovie" id={movie.id.toString()}>
            <img src={movie.image} alt={movie.title} className="imgMovie"/>
            <div className="movieInfo">
                <h3 className="titleMovie" title={movie.title}>{movie.title}</h3>
                <p className="ratingMovie">{movie.rating} ⭐</p>
                <p className="genreMovie">{movie.genre}</p>
            </div>
        </div>
    )
}

export default MovieCard;