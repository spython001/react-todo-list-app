import { useState } from 'react'
import './checkBox.scss'

export default function Checkbox() {
  const [checked, setChecked] = useState();

  return (
    <div className='checkbox'>
        <i className="checkmark unchecked fa-solid fa-square"></i>
        <i className="checkmark checked fa-regular fa-square-check"></i>
    </div>
  )
}
