import type { Movie } from './types'

export const getYear = (movie: Movie) => {
  return movie.release_date?.split('-')[0]
}

export const tryFetch = async (
  url: string,
  options?: RequestInit,
): Promise<[Error | undefined, Response | undefined]> =>
  tryAsync(fetch(url, options))

export const tryAsync = async <T>(
  promise: Promise<T>,
): Promise<[Error | undefined, T | undefined]> => {
  try {
    const result = await promise
    return [undefined, result]
  } catch (error) {
    return [error as Error, undefined]
  }
}
