const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end('Hello')
})

server.listen(PORT, () => {
  console.log(`HTTP server is running at http://localhost:${PORT}`)
})
