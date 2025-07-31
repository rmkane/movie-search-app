import { TMDBClient } from './api-client'
import { DATA_REQUESTS } from './config'
import { FileManager } from './file-manager'

const { TMDB_AUTH_TOKEN } = process.env

const main = async () => {
  if (!TMDB_AUTH_TOKEN) {
    console.error('TMDB_AUTH_TOKEN is required')
    return
  }

  const apiClient = new TMDBClient(TMDB_AUTH_TOKEN)
  const fileManager = new FileManager()

  for (const request of DATA_REQUESTS) {
    const data = await apiClient.fetchData(request.endpoint)
    if (data) {
      await fileManager.updateFile(request, data)
    }
  }
}

main()
