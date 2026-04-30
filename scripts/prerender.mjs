import { createServer } from 'node:http'
import { promises as fs } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import puppeteer from 'puppeteer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const rootDir = path.resolve(__dirname, '..')
const distDir = path.join(rootDir, 'dist')

const STATIC_ROUTES = [
  '/',
  '/services',
  '/services/agents-ia',
  '/services/automatisation',
  '/services/ia-sur-mesure',
  '/tarifs',
  '/a-propos',
  '/contact',
  '/blog',
  '/faq',
]

async function readBlogSlugs() {
  const blogFile = path.join(rootDir, 'src', 'data', 'blog.ts')
  const content = await fs.readFile(blogFile, 'utf8')
  const matches = [...content.matchAll(/slug:\s*'([^']+)'/g)]
  return matches.map((m) => `/blog/${m[1]}`)
}

function contentTypeFor(filePath) {
  const ext = path.extname(filePath).toLowerCase()
  switch (ext) {
    case '.html':
      return 'text/html; charset=utf-8'
    case '.js':
      return 'application/javascript; charset=utf-8'
    case '.css':
      return 'text/css; charset=utf-8'
    case '.json':
      return 'application/json; charset=utf-8'
    case '.svg':
      return 'image/svg+xml'
    case '.png':
      return 'image/png'
    case '.jpg':
    case '.jpeg':
      return 'image/jpeg'
    case '.webp':
      return 'image/webp'
    case '.ico':
      return 'image/x-icon'
    default:
      return 'application/octet-stream'
  }
}

async function createStaticServer() {
  const indexHtmlPath = path.join(distDir, 'index.html')

  const server = createServer(async (req, res) => {
    try {
      const requestUrl = new URL(req.url ?? '/', 'http://localhost')
      let fsPath = path.join(distDir, decodeURIComponent(requestUrl.pathname))

      const stat = await fs.stat(fsPath).catch(() => null)
      if (stat?.isDirectory()) {
        fsPath = path.join(fsPath, 'index.html')
      }

      const exists = await fs.stat(fsPath).catch(() => null)
      if (exists?.isFile()) {
        const body = await fs.readFile(fsPath)
        res.writeHead(200, { 'Content-Type': contentTypeFor(fsPath) })
        res.end(body)
        return
      }

      const indexBody = await fs.readFile(indexHtmlPath)
      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' })
      res.end(indexBody)
    } catch (error) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
      res.end(`Server error: ${error instanceof Error ? error.message : 'Unknown error'}`)
    }
  })

  await new Promise((resolve) => server.listen(4173, resolve))
  return server
}

function outputPathFor(route) {
  if (route === '/') return path.join(distDir, 'index.html')
  const clean = route.replace(/^\/+/, '').replace(/\/+$/, '')
  return path.join(distDir, clean, 'index.html')
}

async function ensureParentDir(filePath) {
  await fs.mkdir(path.dirname(filePath), { recursive: true })
}

async function run() {
  const slugs = await readBlogSlugs()
  const routes = [...new Set([...STATIC_ROUTES, ...slugs])]
  const server = await createStaticServer()
  const browser = await puppeteer.launch({ headless: true })

  try {
    const page = await browser.newPage()

    for (const route of routes) {
      const url = `http://127.0.0.1:4173${route}`
      await page.goto(url, { waitUntil: 'networkidle0' })
      await new Promise((resolve) => setTimeout(resolve, 200))
      const html = await page.content()
      const outPath = outputPathFor(route)
      await ensureParentDir(outPath)
      await fs.writeFile(outPath, `<!doctype html>\n${html}`, 'utf8')
      process.stdout.write(`Prerendered ${route} -> ${path.relative(rootDir, outPath)}\n`)
    }
  } finally {
    await browser.close()
    await new Promise((resolve) => server.close(resolve))
  }
}

run().catch((error) => {
  process.stderr.write(`Prerender failed: ${error instanceof Error ? error.message : String(error)}\n`)
  process.exit(1)
})
