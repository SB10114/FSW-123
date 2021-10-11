import Todo from './Todo'


function TodoList(props) {
    const listItems = props.list.map((item, index) => {
        return <Todo 
                key = {index} 
                todo = {item}
                completeTodo = {props.completeTodo}
                deleteTodo = {props.deleteTodo}
                addTodo = {props.addTodo} />
    })

    return (
        <div>
            {listItems}
        </div>
    )
}


export default TodoList;