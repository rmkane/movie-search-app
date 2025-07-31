import type { DataRequest } from './types'

export const TMDB_API_BASE_URL = 'https://api.themoviedb.org/3'

export const DATA_REQUESTS: DataRequest[] = [
  {
    name: 'Movies',
    endpoint: '/movie/top_rated?language=en-US&page=1',
    filename: 'movies.json',
  },
  {
    name: 'Genres',
    endpoint: '/genre/movie/list?language=en-US',
    filename: 'genres.json',
  },
]

export const getRequestHeaders = (token: string) => ({
  Accept: 'application/json',
  Authorization: `Bearer ${token}`,
})
