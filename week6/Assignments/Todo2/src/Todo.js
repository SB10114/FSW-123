import {useState} from 'react'
import TodoForm from './TodoForm'


function Todo({todo, completeTodo, deleteTodo, editTodo}) {
    
    const [edit, setEdit] = useState(false)
    const [error, setError] = useState(false)
    const [text, setText] = useState(todo.text)

    const editSwitch = () => {
        setEdit(!edit)
        setText(todo.text)
        setError(false)
    }

    const handleEdit = (e) => {
        setText(e.target.value)
    }

    const handleUpdate = (id, text) => {
        editTodo(id, text)
        editSwitch()
    }

    return (
    <li>
        <>
            <input type = "checkbox"
            checked = {todo.isCompleted}
            onChange = {() => completeTodo(todo.id)}
            ></input>
        </>
        {!edit ? (
            <>
                <span style={{textDecoration: todo.isCompleted ? "line-through" : "" }} >{todo.text}</span>
                <button onClick = {() => deleteTodo(todo.id)}>X</button>
                <button onClick = {() => editSwitch()} disabled = {todo.isCompleted}>Edit</button>
            </>
        ) : (
            <>
            <input type = 'text' value = {text} onChange = {handleEdit} />
            <button disabled = {error} onClick = {() => handleUpdate(todo.id, text)}>Update</button>
            <button onClick = {() => editSwitch()}>Cancel</button> 
            </>

           )}
        </li> 
          
    )
}

export default Todo;