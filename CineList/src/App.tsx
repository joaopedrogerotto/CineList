import './App.css'
import Header from './Components/Header/Header'
import MovieList from './Components/MovieList/MovieList'
import { movies } from './data/movies'

function App() {

  return (
    <>
      <Header></Header>
      <MovieList movies={movies}></MovieList>
    </>
  )
}

export default App
