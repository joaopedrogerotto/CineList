import { useState } from "react";
import type { Movie } from "../../types/Movie";
import Movies from "../Movies/Movies";
import "./SearchBar.css"
import FilterGenre from "../FilterGenre/FilterGenre";
import FilterSort from "../FilterOrder/FilterSort";

interface MovieListProps{
    movies: Movie[]
}

function SearchBar({ movies }: MovieListProps) {
    const [search, setSearch] = useState("");
    const [selectedGenre, setSelectedGenre] = useState("Todos");
    const [selectedSort, setSelectedSort] = useState("Todos");


    const filteredMovies = movies.filter(movie =>{
        const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
        const matchesSelectMovie = selectedGenre === "Todos" || movie.genre === selectedGenre;

        return matchesSearch && matchesSelectMovie;
    });

    function SortMovies(tipoOrdem: string) {
        switch (tipoOrdem) {
            case "MaisAvaliado":
                return [...filteredMovies].sort((a, b) => b.rating - a.rating);

            case "MenosAvaliado":
                return [...filteredMovies].sort((a, b) => a.rating - b.rating);
            case "Recente":
                return [...filteredMovies].sort((a, b) => b.year - a.year);
            case "Antigo":
                return [...filteredMovies].sort((a, b) => a.year - b.year);
            case "AlfabeticoCrescente":
                return [...filteredMovies].sort((a, b) => a.title.localeCompare(b.title));
            case "AlfabeticoDecrescente":
                return [...filteredMovies].sort((a, b) => b.title.localeCompare(a.title));
            default:
                return filteredMovies;
        }
    }

    const sortedMovies = SortMovies(selectedSort);


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
                <FilterSort selectedSort={selectedSort} onChangeSort={setSelectedSort}></FilterSort>
            </div>

            <Movies movies={sortedMovies} />
        </>
    );
}

export default SearchBar;