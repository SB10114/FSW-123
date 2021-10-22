const express = require('express')
const app = express()
const PORT = 9000

const songsRouter = require('./src/Routes/SongsRouter')

app.use(express.json())

app.use('/currentSongs', songsRouter)

app.listen(PORT, () => {
    console.log(`App started on port: ${PORT}`)
});