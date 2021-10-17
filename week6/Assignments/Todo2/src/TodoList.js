import Todo from './Todo'
//import './todoList.css'


function TodoList({todos, completeTodo, deleteTodo, editTodo}) {
    
    const listItems = todos.map((todo) => {
        return <Todo 
                key = {todo.id} 
                todo = {todo}
                completeTodo = {completeTodo}
                deleteTodo = {deleteTodo}
                editTodo = {editTodo}
                />
    })

    return (
        <div>
            {listItems}
        </div>
    )
}


export default TodoList;
