//import CheckBox from '../checkbox/CheckBox'
import './tasks.scss'

export default function Tasks({name, finish}) {
  return (
    <div className='task'>
        <input type="checkbox" checked={finish}/>
        <span>{name}</span>
    </div>
  )
}
