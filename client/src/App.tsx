import { useEffect, useState } from 'react'

import { z } from 'zod'

import type { Movie } from './types'
import { MovieSchema } from './schemas'
import { tryFetch } from './utils'
import { MovieCard } from './components/MovieCard'

function App() {
  const [movies, setMovies] = useState<Movie[]>([])

  useEffect(() => {
    const fetchMovies = async () => {
      const [error, response] = await tryFetch('http://localhost:3000/movies')
      if (error) {
        console.error(error)
        return
      }
      if (!response?.ok) {
        console.error('Failed to fetch movies')
        return
      }

      const data = await response.json()
      const movies = z.array(MovieSchema).parse(data)
      setMovies(movies)
    }
    fetchMovies()
  }, [])

  return (
    <>
      <h1 className="text-4xl font-bold">Movies</h1>
      <div className="grid grid-cols-4 gap-4">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  )
}

export default App
