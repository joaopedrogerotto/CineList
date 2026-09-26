import type { Movie } from "../../types/Movie";
import "./FilterGenre.css"

interface FilterGenreProps {
    movies: Movie[];
    selectedGenre: string;
    onChangeGenre: (genre: string) => void;
}


function FilterGenre({movies, selectedGenre, onChangeGenre}: FilterGenreProps){
    const genres = [...new Set(movies.map(movie => movie.genre))];

    return(
        <div className="filterGenre">
            <select value={selectedGenre} onChange={(e) => onChangeGenre(e.target.value)}>
                <option value="Todos">Todos</option>
                {genres.map((genre) => (
                    <option key={genre} value={genre}>{genre}</option>
                ))}
            </select>
        </div>
    );
}

export default FilterGenre;