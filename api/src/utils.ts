import { readFile, writeFile } from 'fs/promises'

import z from 'zod'

export const tryFetch = async (
  url: string,
  options?: RequestInit,
): Promise<[Error | undefined, Response | undefined]> =>
  tryAsync(fetch(url, options))

export const tryReadJson = async <T>(
  path: string,
  schema: z.ZodSchema<T>,
): Promise<[Error | undefined, T | undefined]> => {
  const [error, data] = await tryReadFile(path)
  if (error) {
    return [error, undefined]
  }
  if (!data) {
    return [new Error('No data'), undefined]
  }
  return [undefined, schema.parse(JSON.parse(data))]
}

export const tryWriteJson = async (
  filePath: string,
  data: any,
): Promise<[Error | undefined, boolean]> =>
  tryWrite(filePath, JSON.stringify(data, null, 2))

export const tryWrite = async (
  filePath: string,
  content: string,
): Promise<[Error | undefined, boolean]> => {
  try {
    await writeFile(filePath, content)
    return [undefined, true]
  } catch (error) {
    return [error as Error, false]
  }
}
export const tryReadFile = async (
  path: string,
): Promise<[Error | undefined, string | undefined]> =>
  tryAsync(readFile(path, 'utf-8'))

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
