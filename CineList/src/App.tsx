import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import { movies } from './data/movies'
import Favorites from './Components/Favorites/Favorites'
import SearchBar from './Components/SearchBar/SearchBar'
import MovieDetails from './Components/MovieDetails/MovieDetails'

function App() {

  return (
    <>
      <Header></Header>
      
      <Routes>
        <Route path="/" element={<Navigate to="/filmes" />} />        
        <Route path="/filmes" element={<SearchBar movies={movies}></SearchBar>}/>  
        <Route path="/favoritos" element={<Favorites movies={movies}/>}/>
        <Route path="/filme/:id" element={<MovieDetails movies={movies}></MovieDetails>} />
      </Routes>
      
    </>
  )
}

export default App
