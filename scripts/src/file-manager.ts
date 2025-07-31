import { mkdir } from 'fs/promises'
import { join } from 'path'
import { fileURLToPath } from 'url'

import type { DataRequest } from './types'
import { tryWriteJson } from './utils'

export class FileManager {
  private baseDir: string

  constructor() {
    const __filename = fileURLToPath(import.meta.url)
    const __dirname = join(__filename, '../')
    this.baseDir = join(__dirname, '../../api/data/')
  }

  async updateFile(request: DataRequest, data: any): Promise<boolean> {
    const { name, filename } = request
    const filePath = join(this.baseDir, filename)

    console.log(`Fetching ${name.toLowerCase()}...`)

    if (!data || Object.keys(data).length === 0) {
      console.error(`No ${name.toLowerCase()} data received`)
      return false
    }

    // Create the directory if it doesn't exist
    await mkdir(this.baseDir, { recursive: true })

    const [writeErr] = await tryWriteJson(filePath, data)
    if (writeErr) {
      console.error(`Error writing ${name.toLowerCase()} to file:`, writeErr)
      return false
    }

    console.log(`${name} data written to file successfully`)
    return true
  }
}
