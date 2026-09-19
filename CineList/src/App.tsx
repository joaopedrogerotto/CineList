import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Components/Header/Header'
import { movies } from './data/movies'
import Favorites from './Components/Favorites/Favorites'
import Movies from './Components/Movies/Movies'

function App() {

  return (
    <>
      <Header></Header>
    
      <Routes>
        <Route path="/" element={<Navigate to="/filmes" />} />
        <Route path="/filmes" element={<Movies movies={movies}/>}/>  
        <Route path="/favoritos" element={<Favorites movies={movies}/>}/>
      </Routes>
    </>
  )
}

export default App
