export interface DataRequest {
  name: string
  endpoint: string
  filename: string
}

export interface TMDBResponse {
  results?: any[]
  genres?: any[]
  [key: string]: any
}
