import './App.css'
import Header from './components/header/Header'
import MovieList from './components/movie/MovieList'

import Movies from './components/data.json'

function App() {

  // console.log(Movies)

  return (
    <>
      <Header />

      <div className='main'>
        {
          Movies.map((MovieData) => {
            return (
              <>
                <MovieList title={MovieData.Title} year={MovieData.Year} poster={MovieData.Poster} />
              </>
            )
          })
        }
      </div>

    </>
  )
}

export default App
