import { useNavigate } from "react-router-dom";
import type { Movie } from "../../types/Movie";
import "./MovieCard.css"
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

interface MovieCardProps {
    movie: Movie;
    onChangeFavorite: (idMovie: number) => void;
}


function MovieCard({movie, onChangeFavorite}:MovieCardProps){
    const navigate = useNavigate();

    const viewMovieDetails = () =>{
        navigate(`/filme/${movie.id}`)
    };

    return(
        <div className="cardMovie" id={movie.id.toString()} onClick={viewMovieDetails}>
            <img src={movie.image} alt={movie.title} className="imgMovie"/>
            <div className="movieInfo">
                <h3 className="titleMovie" title={movie.title}>{movie.title}</h3>
                <p className="ratingMovie">{movie.rating} AVALIAÇÃO</p>
                <p className="genreMovie">{movie.genre}</p>
                <p 
                    className={movie.favorite ? "fullStarGold" : "unfullStar"}
                    onClick={() => onChangeFavorite(movie.id)}
                >
                        {movie.favorite ? <FaStar/> : <CiStar/>}
                </p>
            </div>
        </div>
    )
}

export default MovieCard;