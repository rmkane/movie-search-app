import type { TMDBResponse } from './types'
import { TMDB_API_BASE_URL, getRequestHeaders } from './config'
import { tryAsync, tryFetch } from './utils'

export class TMDBClient {
  private token: string

  constructor(token: string) {
    this.token = token
  }

  async fetchData<T>(endpoint: string): Promise<T | null> {
    if (!this.token) {
      console.error('TMDB_AUTH_TOKEN is required')
      return null
    }

    const apiUrl = `${TMDB_API_BASE_URL}${endpoint}`
    const [fetchErr, response] = await tryFetch(apiUrl, {
      method: 'GET',
      headers: getRequestHeaders(this.token),
    })

    if (fetchErr) {
      console.error('Fetch error:', fetchErr)
      return null
    }

    if (!response) {
      console.error('No response received')
      return null
    }

    if (!response.ok) {
      console.error(`HTTP ${response.status}: ${response.statusText}`)
      return null
    }

    const [jsonErr, data] = await tryAsync(response.json())
    if (jsonErr) {
      console.error('JSON parsing error:', jsonErr)
      return null
    }

    return data as T
  }
}
