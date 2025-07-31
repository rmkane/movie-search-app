import { join } from 'path'

import type { Genre, Movie } from './types'
import { GenreListSchema, MovieListSchema } from './schemas'
import { CacheableData } from './cachable-data'
import { tryReadJson } from './utils'

const cachedMovies = new CacheableData<Movie[]>()
const cachedGenres = new CacheableData<Genre[]>()

export const getMovies = async () => {
  if (cachedMovies.getData() === undefined) {
    const [readErr, data] = await tryReadJson(
      join(process.cwd(), 'data/movies.json'),
      MovieListSchema,
    )
    if (readErr) {
      console.error('Error reading file:', readErr)
      cachedMovies.setData([])
      return
    }
    if (data) {
      cachedMovies.setData(data.results)
    }
  }

  return cachedMovies.getData()
}

export const getGenres = async () => {
  if (cachedGenres.getData() === undefined) {
    const [readErr, data] = await tryReadJson(
      join(process.cwd(), 'data/genres.json'),
      GenreListSchema,
    )
    if (readErr) {
      console.error('Error reading file:', readErr)
      cachedGenres.setData([])
      return
    }
    if (data) {
      cachedGenres.setData(data.genres)
    }
  }

  return cachedGenres.getData()
}
