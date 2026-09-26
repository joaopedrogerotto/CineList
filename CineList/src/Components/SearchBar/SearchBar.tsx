import { useState } from "react";
import type { Movie } from "../../types/Movie";
import Movies from "../Movies/Movies";
import "./SearchBar.css"
import FilterGenre from "../FilterGenre/FilterGenre";

interface MovieListProps{
    movies: Movie[]
}

function SearchBar({ movies }: MovieListProps) {
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("Todos");

    const filteredMovies = movies.filter(movie =>{
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesSelectMovie = selectedGenre === "Todos" || movie.genre === selectedGenre;

        return matchesSearch && matchesSelectMovie;
    });


    return (
        <>
            <div className="searchFilters">
                <div className="divSearchBar">
                    <input
                        type="text"
                        id="filmName"
                        placeholder="Pesquisar filmes..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <FilterGenre movies={movies} selectedGenre={selectedGenre}onChangeGenre={setSelectedGenre}></FilterGenre>
            </div>

            <Movies movies={filteredMovies} />
        </>
    );
}

export default SearchBar;