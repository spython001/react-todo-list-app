import { useState, useEffect } from 'react'
import './App.css'
import Tasks from './tasks/Tasks'
import TodoForm from './todoForm/TodoForm'

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('todos'));
    return savedTodos ? savedTodos : [];
  });;

  //saving the tasks to local storage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
   
  }, [todos]);
  

  const addTodo = (name) => {
    setTodos(prev => {
      return [...prev, {name:name, finish:false}];
    })
  }

  const updateFinishedTodos= (todoIndex, newDone) => {
    setTodos(prev =>{
      const newTodos = [...prev];
      newTodos[todoIndex].finish = newDone;
      return newTodos;
    });
  }

  const todoProg = todos.filter(t => t.finish).length;
  const totalTodos = todos.length

 
  return (
    <>
    <div className='app'>
      <h1>{todoProg}/{totalTodos} Complete!</h1>
      <TodoForm onPut={addTodo}/>
      
      <div className='tsk'>
      {todos.map((todo, index) => (
          <Tasks 
            {...todo} 
            key={todo.name} 
            onToggle={finish => updateFinishedTodos(index, finish)}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
