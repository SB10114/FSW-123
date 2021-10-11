import './App.css';
import {listoftodos} from './Store.js'
import TodoList from './TodoList';
import {useState} from "react"

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
    var tempTodos = [...todos]
    var createNew = tempTodos.add((item) => item.id)

    setTodos(createNew)
  }

    return (
        <div>
            <div>
            <TodoList list = {todos}
             completeTodo = {completeTodo}
             deleteTodo = {deleteTodo}
             addTodo = {addTodo}/>
        </div>
   </div>
    );
  };

export default App;