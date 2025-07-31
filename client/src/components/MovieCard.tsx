import type { Movie } from '../types'
import { getYear } from '../utils'

interface MovieCardProps {
  movie: Movie
}

export function MovieCard({ movie }: MovieCardProps) {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-gray-200 bg-gray-800 p-4">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-lg font-bold">
          {movie.title} ({getYear(movie)})
        </h2>
        <img src={posterUrl} alt={movie.title} className="h-48 w-32" />
      </div>
      <p className="text-sm text-gray-400">{movie.overview}</p>
    </div>
  )
}
