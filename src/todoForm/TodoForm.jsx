import { useState } from 'react'
import './todoForm.scss'

export default function TodoForm({onPut}) {
 const [todoName, setTodoName] = useState('');

 //function to prevent default and submit
 const handleSubmit = (e) => {
    e.preventDefault();
    onPut(todoName);
    setTodoName('');
 }

  return (
    <div className='todoForm'>
        <form onSubmit={handleSubmit}>
            <input 
            type="text" 
            placeholder='add an activity...'
            value={todoName}
            onChange = {e => setTodoName(e.target.value)}
            />
            <button>+</button>
        </form>
    </div>
  )
}
