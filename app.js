const express = require('express')
const favicon = require('express-favicon')

const app = express()
const path = require('path')

const port = process.env.PORT || 3000

app.use(express.static('dist'))
app.use(favicon(`${__dirname}/dist/favicon.png`))
app.get('*', req => {
  req.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(port, error => {
  if (error) return console.log('error: ', error)
  return console.log('Server running on post: ', port)
})
