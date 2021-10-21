// import ReactPlayer from 'react-player'
// import audio from "../musicFiles/05_I_Hope _You're_Happy.m4a"
// import audio2 from "../musicFiles/01_Rhiannon.m4a"
// import audio3 from '../musicFiles/03_Woman.m4a'
// import audio4 from '../musicFiles/04_Whiskey_Glasses.m4a'

import Buttons from "./Buttons";

function SongsRender(songs, deleteSongs) {
    const songsList = songs.map((button) => {
      return <Buttons 
                key = {button.id}
                button = {button}
                deleteSongs = {deleteSongs}
                />
    })
    
    
    return (
    <>
      {songsList}
    </>
    )
}

export default SongsRender;

  //  <>
  //       <ReactPlayer
  //         url= {audio}
  //         width="400px"
  //         height="100px"
  //         playing={false}
  //         controls={true}
  //       />
  //         <ReactPlayer
  //         url= {audio2}
  //         width="400px"
  //         height="100px"
  //         playing={false}
  //         controls={true}
  //       />
  //         <ReactPlayer
  //         url= {audio3}
  //         width="400px"
  //         height="100px"
  //         playing={false}
  //         controls={true}
  //       />
  //         <ReactPlayer
  //         url= {audio4}
  //         width="400px"
  //         height="100px"
  //         playing={false}
  //         controls={true}
  //       />