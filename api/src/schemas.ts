import { z } from 'zod'

export const MovieSchema = z.object({
  id: z.number(),
  title: z.string(),
  genre_ids: z.array(z.number()).optional(),
  overview: z.string().optional(),
  poster_path: z.string().optional(),
  release_date: z.string().optional(),
  vote_average: z.number().optional(),
  vote_count: z.number().optional(),
})

export const GenreSchema = z.object({
  id: z.number(),
  name: z.string(),
})

export const MovieListSchema = z.object({
  results: z.array(MovieSchema),
})

export const GenreListSchema = z.object({
  genres: z.array(GenreSchema),
})
