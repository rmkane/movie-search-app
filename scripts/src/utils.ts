import { writeFile } from 'fs/promises'

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

export const tryFetch = async (
  url: string,
  options?: RequestInit,
): Promise<[Error | undefined, Response | undefined]> =>
  tryAsync(fetch(url, options))

export const tryWriteJson = async (filePath: string, data: any) =>
  tryAsync(writeFile(filePath, JSON.stringify(data, null, 2)))
