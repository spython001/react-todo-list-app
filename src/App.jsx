import { useState } from 'react'
import './App.css'
import Tasks from './tasks/Tasks'
import TodoForm from './todoForm/TodoForm'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (name) => {
    setTodos(prev => {
      return [...prev, {name:name, finish:false}];
    })
  }

 
  return (
    <div className='app'>
      <TodoForm onPut={addTodo}/>
      
      <div className='tsk'>
        {todos.map(todo => (
          <Tasks {...todo}/>
        ))}
      </div>
    </div>
  )
}

export default App
