const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => {
  res.send('Hi I am Muthu krishnan.This is my Github action Output ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
