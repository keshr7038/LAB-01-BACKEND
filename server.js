const express = require('express')

const app = express()
const PORT = process.env.PORT || 3000

app.get('/', (request, response) => {
  response.status(200).send('Welcome to my Node.js and Express server!')
})

app.get('/about', (request, response) => {
  response.status(200).json({
    name: 'SASI RISHIKESH',
    section: 'AIDE 2B'
  })
})

app.get('/time', (request, response) => {
  response.status(200).json({
    time: new Date()
  })
})

app.use((request, response) => {
  response.status(404).send('404 - Page Not Found')
})

app.listen(PORT, () => {
  console.log(`Express server is running at http://localhost:${PORT}`)
})
