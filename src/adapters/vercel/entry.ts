import { serveStatic } from '@hono/node-server/serve-static'
import { Hono } from 'hono'
import { handle } from 'hono/vercel'

const app = new Hono()

app.use(
  "*",
  serveStatic({
    root: "./vercel/output/static",
  }),
)

export default handle(app)