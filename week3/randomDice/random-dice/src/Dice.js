import { faDiceOne as side1, faDiceTwo as side2, faDiceThree as side3, faDiceFour as side4, faDiceFive as side5, faDiceSix as side6, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Dice(props) {
  const dice1 = <FontAwesomeIcon 
    style = {{color: props.background, width: props.width, height: props.height}}
    className = 'DieStyling' icon = {
    props.number === 1 ? (side1) :
    props.number === 2 ? (side2) :
    props.number === 3 ? (side3) :
    props.number === 4 ? (side4) :
    props.number === 5 ? (side5) :
    props.number === 6 ? (side6) :
     ''}  />
  
    return (
      <div>
      {dice1}
     </div>
    );
  }
  
  export default Dice;