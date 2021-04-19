const http = require('http')

const PORT = process.env.PORT || 3000

const server = http.createServer((req, res) => {
<<<<<<< HEAD
  if (req.url.match(/^\/b64\//)) return respondBase64(req, res)
=======
  if (req.url === '/user-agent') return respondUserAgent(req, res)
>>>>>>> e166d38 (fiat lux)

  res.end()
})


function respondBase64 (req, res) {
  const phrase = req.url.replace(/^\/b64\//, '')
  res.end(JSON.stringify({ b64: Buffer.from(phrase).toString('base64') }))
}

server.listen(PORT)
console.log(`Server listening on port ${PORT}`)

if (require.main !== module) module.exports = server
