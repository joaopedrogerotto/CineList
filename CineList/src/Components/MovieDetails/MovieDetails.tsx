import type { Movie } from "../../types/Movie";
import { useNavigate, useParams } from "react-router-dom";
import "./MovieDetails.css";

interface MovieDetailsProps {
    movies: Movie[];
}

function MovieDetails({ movies }: MovieDetailsProps) {

    const { id } = useParams();

    const navigate = useNavigate();

    const movie = movies.find(m => m.id === Number(id));

    if (!movie) {
        return <h2>Filme não encontrado.</h2>;
    }

    return (
        <div className="moviePage">
            <button
                className="backButton"
                onClick={() => navigate(-1)}
            >
                ← Voltar
            </button>

            <div
                className="movieBackground"
                style={{ backgroundImage: `url(${movie.image})` }}
            ></div>

            <div className="movieOverlay"></div>

            <div className="movieDetails">

                <div className="posterMovie">
                    <img
                        src={movie.image}
                        alt={movie.title}
                    />
                </div>

                <div className="infosMovie">

                    <span className="detailsGenreMovie">
                        {movie.genre}
                    </span>

                    <h1 className="detailsTitleMovie">
                        {movie.title}
                    </h1>

                    <div className="detailsRatingMovie">
                        <span>★</span> {movie.rating}
                    </div>
                    <p className="descriptionMovie">
                        {movie.description}
                    </p>

                </div>

            </div>

        </div>
    );
}

export default MovieDetails;