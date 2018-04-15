const express = require('express')
const app = express()
const path = require('path')

const PORT = 3000

app.use(express.static('dist'))

app.get('/', (rq, rs) => {
  rs.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
