import './App.css';
import list from './Store.js'
import TodoList from './TodoList';


function App() {
    
    return (
        <div>
            <TodoList list = {list}/>
        </div>
    );
  };


export default App;