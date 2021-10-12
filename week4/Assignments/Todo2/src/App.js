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

  const addTodo = text => {
    var newTodo = {
      id: uuidv4(),
      isCompleted: false,
      text: text
    }
    var tempTodos = [...todos, newTodo]
    //var createNew = tempTodos.text((item) => item.id)

    setTodos(tempTodos)
  }

    return (
        <div>
            <div>
            <TodoList list = {todos}
             completeTodo = {completeTodo}
             deleteTodo = {deleteTodo}
             />
             <TodoForm addTodo = {addTodo} />
        </div>
   </div>
    );
  };

export default App;