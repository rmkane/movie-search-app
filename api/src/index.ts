import { Hono } from 'hono'
import { cors } from 'hono/cors'

import { getGenres, getMovies } from './service'

const app = new Hono()

// Add CORS middleware
app.use(
  '*',
  cors({
    origin:
      process.env.NODE_ENV === 'production'
        ? ['http://localhost', 'https://localhost'] // Production origins
        : ['http://localhost:5173', 'http://localhost:3000'], // Development origins
    allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  }),
)

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/movies', async (c) => {
  return c.json(await getMovies())
})

app.get('/genres', async (c) => {
  return c.json(await getGenres())
})

export default app
