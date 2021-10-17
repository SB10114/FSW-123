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
            <input type = 'text' value = {text} onChange = {editSwitch} />
            <button disbled = {error} onClick = {() => editTodo(todo.id, text)}>Update</button>
            <button onClick = {() => editSwitch()}>Cancel</button> 
            </>

           )}
        </li> 
          
    )
}

export default Todo;
