const express = require('express')
const songsRouter = express.Router()
const {v4: uuidv4} = require('uuid')

const currentSongs = [
    {
        title: "Rhiannon",
        artist: 'Fleetwood Mac',
        src: "./musicFiles/01_Rhiannon.m4a",
        id: uuidv4()
      },
      {
        title: "I Hope You're Happy",
        artist: 'Blue October',
        src: "./musicFiles/05_I_Hope _You're_Happy.m4a",
        id: uuidv4()
      },
      {
        title: "Woman",
        artist: 'Mumford and Sons',
        src: "./musicFiles/03_Woman.m4a",
        id: uuidv4()
      },
      {
        title: "Whiskey Glasses",
        artist: 'Chris Stapleton',
        src: "./musicFiles/04_Whiskey_Glasses.m4a",
        id: uuidv4()
      }
]

songsRouter
  .post('/', (req, res) => {
    const newSong = req.body
    newSong._id = uuidv4()
    currentSongs.push(newSong)

    res.send(`Successfully added new Song to your playlist`)
  })

  //.delete()

  



module.exports = songsRouter;
