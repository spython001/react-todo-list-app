import './todoForm.scss'

export default function TodoForm() {
  return (
    <div className='todoForm'>
        <form>
            <input type="text" placeholder='add an activity...'/>
            <button>+</button>
        </form>
    </div>
  )
}
