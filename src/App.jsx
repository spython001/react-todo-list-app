import './App.css'
import Tasks from './tasks/Tasks'
import TodoForm from './todoForm/TodoForm'

function App() {
 
  return (
    <div className='app'>
      <TodoForm/>
      
      <div className='tsk'><Tasks/></div>
    </div>
  )
}

export default App
