import './App.css';
import {listoftodos} from './Store.js'
import TodoList from './TodoList';
import TodoForm from './TodoForm'
import {useState} from "react"
import {v4 as uuidv4} from 'uuid'

function App() {
  const [todos, setTodos] = useState(listoftodos)
 
  const completeTodo = id => {
    var tempTodos = [...todos]
    var index = tempTodos.findIndex(item => item.id === id) 
    tempTodos[index].isCompleted = !tempTodos[index].isCompleted
    setTodos(tempTodos)
  }
  
  const deleteTodo = (id) => {
    var tempTodos = [...todos]
    var newTodos = tempTodos.filter((item) => item.id !== id)

    setTodos(newTodos)
  }

  const editTodo = (id, text) => {
    const tempTodos = [...todos]
    const index = tempTodos.findIndex(todo => todo.id === id)

    tempTodos[index].text = text
    setTodos(tempTodos)
  }

  const addTodo = text => {
    var newTodo = {
      id: uuidv4(),
      isCompleted: false,
      text: text
    }
    var tempTodos = [...todos, newTodo]

    setTodos(tempTodos)
  }

    return (
        <>
          <h2>Todo App</h2>
          <h4>Add new todos:</h4>
          <TodoForm addTodo = {addTodo} />
            <>
            <TodoList 
             todos = {todos}
             completeTodo = {completeTodo}
             deleteTodo = {deleteTodo}
             editTodo = {editTodo}
             />
             
        </>
   </>
    );
  };

export default App;