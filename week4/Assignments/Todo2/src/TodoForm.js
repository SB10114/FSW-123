

function TodoForm(props) {
    var local = [...Todos]

    return(
            <form>
                <input type = 'text' placeholder = 'Type item here'></input>
                <input></input>

                <button onClick = {() => props.addTodo(props.todo.id)}>Add New Item</button>
            </form>
        )
}