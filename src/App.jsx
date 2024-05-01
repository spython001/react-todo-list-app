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

  //TO DELETE TASK
  const removeTodos = (todoIndex) => {
    setTodos(prev => {
      return prev.filter((todoObj, index ) =>index !== todoIndex);
    });
  }

  const todoProg = todos.filter(t => t.finish).length;
  const totalTodos = todos.length

  const getMessage = () => {
    const percent = todoProg/totalTodos * 100;

    if (percent === 0) {
      return `Let's get started 🔥🔥🔥`;
    } 
    if (percent ===100) {
      return ' Good job, see you next time !'
    }

    return 'Why stop here, when you can finish it 😊'
  }

  return (
    <>
    <div className='app'>
      <h3>spython ...</h3>
      <h1>{todoProg}/{totalTodos} Complete!</h1>
      <h2>{getMessage()}</h2>

      <TodoForm onPut={addTodo}/>
      
      <div className='tsk'>
      {todos.map((todo, index) => (
          <Tasks 
            {...todo} 
            key={todo.name} 
            onToggle={finish => updateFinishedTodos(index, finish)}
            onDelete={() => removeTodos(index)}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default App
