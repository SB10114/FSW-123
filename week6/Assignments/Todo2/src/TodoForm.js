import {useState} from "react"

function TodoForm({addTodo}) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = (evt) => {
        evt.preventDefault()

        if (value === '') {
            setError('Please fill out todo')
            return
        } else {
            addTodo(value)
            setValue('')
        }
    }

    const handleChange = (evt) => {
        if (error) setError('')
        setValue(evt.target.value)
    }

    return(
            <form>
                <input type = 'text' onChange = {(e) => {
                    var {value} = e.target
                    setValue(value)
                }} value = {value}
                placeholder = 'Type item here'></input>

                <button onClick = {(e) => 
                    {
                        if(value.length !== 0){addTodo(value)} 
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