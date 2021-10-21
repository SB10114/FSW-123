// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
// import {faPlay, faPause, faForward, faBackward} from "@fortawesome/free-solid-svg-icons"


function Buttons(button, deleteSongs){


    return (
        <>
        <button onClick = {() => deleteSongs(button.id)}>Delete</button>
        </>
    )
}

export default Buttons;

/* <button id = "skipF" onClick= {() => props.SongForward(false)}>
            <FontAwesomeIcon icon = {faForward} />
        </button>
        <button id = "play" onClick = {() => props.playSong(!props.isPlaying)}>
            <FontAwesomeIcon icon = {props.isPlaying ? faPause : faPlay} />
        </button>
        <button id = "skipB"> onClick = {() => props.SongBackward()}
            <FontAwesomeIcon icon = {faBackward} />
        </button> */