//import CheckBox from '../checkbox/CheckBox'
import './tasks.scss'

export default function Tasks({name, finish, onToggle}) {
  return (
    <div className={'task ' + (finish ?'finish': '')}>
        <input type="checkbox" checked={finish} onClick={() => onToggle(!finish)}/>
        <span>{name}</span>
    </div>
  )
}
