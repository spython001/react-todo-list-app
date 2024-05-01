import './tasks.scss'

export default function Tasks({name, finish, onToggle}) {
  return (
    <div className={'task ' + (finish ?'finish': '')}>
        <div className="inputCheck"><input type="checkbox" checked={finish} onChange={() => onToggle(!finish)}/></div>
        
        <div className="taskName">
          <span>{name}</span>
        </div>
        
        <button className="del"><i className="trash fa-solid fa-trash"></i></button>
    </div>
  )
}
