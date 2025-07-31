import { z } from "zod";

import {
  GenreListSchema,
  GenreSchema,
  MovieListSchema,
  MovieSchema,
} from "./schemas";

export type Genre = z.infer<typeof GenreSchema>;
export type GenreList = z.infer<typeof GenreListSchema>;

export type Movie = z.infer<typeof MovieSchema>;
export type MovieList = z.infer<typeof MovieListSchema>;
