import {useState} from 'react'
//import { } from 'react-router-dom';
import {v4 as uuidv4} from 'uuid'
import {currentSongs} from './Routes/SongsRouter';
import Footer from './components/FooterElement';
import { NavLink } from 'react-router-dom';
import NavBar from './components/NavBar';
// import NavBar from './components/NavBar';
// import HomeGreeting from './components/Home';
// import Details from './components/Details';
// import Buttons from './components/Buttons';



function App() {
  const [songs, setSongs] = useState(currentSongs)
  
  const deleteSongs = (id) => {
    var songTitle = [...songs]
    var newSongs = songTitle.filter((item) => item.id !== id)

    setSongs(newSongs)
  }

  const addSongs = text => {
    var newOnes= {
      title: "",
      artist: '',
      src: "",
      id: uuidv4() 
    }
    var moreSongs = [...songs, newOnes]

    setSongs(moreSongs)
  }

    return (
      <div>
        <>
          <Footer />
        </>
        <>
        <NavBar  />
        </>
    </div>
    )
}

export default App;


{/* <SongsRender 
        songs = {songs}
        deleteSongs = {deleteSongs}
        addSongs = {addSongs}
        /> */}