import Dice from "./Dice";
import {useState} from "react"

// for (var i = 0; i< 100; i++){
//     console.log(Math.random() * 6 + 1)
// }

function RollEmOut(props) {
    const [num1, setNum1] = useState (Math.floor(Math.random() * 6 + 1))
    const [num2, setNum2] = useState (Math.floor(Math.random() * 6 + 1))

    function button(){
        setNum1(Math.floor(Math.random() * 6 + 1))
        setNum2(Math.floor(Math.random() * 6 + 1))
    }

    return (
    <div>
        <div className = 'Roll' style = { {display:'flex', justifyContent: 'center', marginTop: 80} }>
          <Dice number = {num1}
            background = 'blue'
            width = {200}
            height = {200}/>
          <Dice number = {num2}
           background = 'blue'
           width = {200}
           height = {200}/>
        </div>
          <button onClick = {button} style = {{marginTop: 80}}>Roll The Dice</button>
    </div>
     );
    }
  
export default RollEmOut;
