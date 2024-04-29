import { useState } from 'react'
import './todoForm.scss'

export default function TodoForm() {
 const [todoName, setTodoName] = useState('');

  return (
    <div className='todoForm'>
        <form>
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
