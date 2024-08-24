const express = require('express')

const app = express()

app.get('/', (req, res) => {
  console.log('GET')
  res.status(200)
})

app.listen(8081, () => {
  console.log('app started')
})
