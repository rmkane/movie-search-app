export class CacheableData<T> {
  private data: T | undefined
  private lastUpdated: Date | undefined

  constructor(data?: T) {
    this.data = data
  }

  setData(data: T) {
    this.data = data
    this.lastUpdated = new Date()
  }

  getData() {
    return this.data
  }

  getLastUpdated() {
    return this.lastUpdated
  }
}
