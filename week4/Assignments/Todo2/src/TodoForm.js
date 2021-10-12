import {useState} from "react"

function TodoForm(props) {
    //var local = [...Todos]
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    return(
            <form>
                <input type = 'text' onChange = {(e) => {
                    var {value} = e.target
                    setValue(value)
                }} value = {value}
                placeholder = 'Type item here'></input>

                <button onClick = {(e) => 
                    {
                        if(value.length !== 0){props.addTodo(value)} 
                        else {
                            setError('Please provide a todo')
                        }
                        e.preventDefault()

                    }}>Add New Item</button>
                
                <p>{error}</p>
            </form>
        )
}

export default TodoForm