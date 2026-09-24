import { useState } from "react";
import type { Movie } from "../../types/Movie";
import Movies from "../Movies/Movies";
import "./SearchBar.css"

interface MovieListProps{
    movies: Movie[]
}

function SearchBar({ movies }: MovieListProps) {
    const [search, setSearch] = useState("");

    const filteredMovies = movies.filter(movie =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div className="divSearchBar">
                <input
                    type="text"
                    id="filmName"
                    placeholder="Pesquisar filmes..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <Movies movies={filteredMovies} />
        </>
    );
}

export default SearchBar;