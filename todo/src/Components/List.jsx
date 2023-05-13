import React from 'react'
import {FaRegTrashAlt} from 'react-icons/fa'



const styles={
li:`flex justify-between p-4 my-2 bg-slate-300 capitalize`,
row:`flex`,
p:`ml-2 cursor-pointer`,
button:`cursor-pointer flex items-center`
}

export default function List({todo,togglecomplete}) {
  return (
    <li className={styles.li}>
        <div className={styles.row}>
           <input type="checkbox"/>
           <p onClick={()=>togglecomplete(todo)} className={styles.p}>
            {todo.text}
           </p>
        </div>
        <button className={styles.button} onClick={() => deleteTodo(todo.id)}>{<FaRegTrashAlt />}</button>
    </li>
  )
}
