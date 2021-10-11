
function Todo(props) {

    //console.log(props)

    return (
        <div>
           <input type = "checkbox"
           checked = {props.todo.isCompleted}
           onChange = {() => props.completeTodo(props.todo.id)}
           />
           <span style={{textDecoration: props.todo.isCompleted ? "line-through" : "" }} >{props.todo.text}</span>
           <button onClick = {() => props.deleteTodo(props.todo.id)}>X</button>
        </div>
    )
}

export default Todo;