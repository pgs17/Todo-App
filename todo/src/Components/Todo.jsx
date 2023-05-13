import React, { useEffect, useState } from 'react'
import {GrAddCircle} from 'react-icons/gr'
import List from './list'
import {db} from '../Firebase'
import {query,collection,onSnapshot, doc, updateDoc, deleteDoc, addDoc} from 'firebase/firestore'

// defining styles
const style = {
 container:`bg-slate-100 p-4 max-w-[500px] w-full m-auto rounded-md`,
 heading:`text-center text-2xl font-semibold p-2`,
 form:`flex justify-between`,
 input:`border border-blue-100 p-2 text-xl w-full`,
 button:`border p-4 ml-2 bg-purple-500 sm:mt-0`
}

export default function Todo() {
    const [todos,settodos] =useState([''])
    const [input, setInput] = useState('');

    const collectionRef=collection(db,'Todos')


// create todo
const addtodos = async(e) => {
e.preventDefault()
if(input===""){
    alert("Enter A VALID TODO LAUDE")
    return
}
await addDoc( collection(db,'Todos'),{
    text:input,
    Completed:false
})
}



// read todo
useEffect(() => {
    const q = query(collection(db, 'Todos'));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todosArr = [];
      QuerySnapshot.forEach((doc) => {
        todosArr.push({ ...doc.data(), id: doc.id });
      });
      settodos(todosArr);
    });
    return () => unsubscribe();
  }, []);

// update todo
const togglecomplete = async(todo) => {
    await updateDoc(doc(db,'Todos',todo.id)),{
    Completed: !todo.Completed
}}

// delete todo
const deletetodo= async(id) =>{
    await deleteDoc(doc(db,'Todos',id))
}

  return (
    <div>
      <div className={style.container}>
        <h3 className={style.heading}>Add TODO's</h3>
        <form className={style.form} onSubmit={addtodos}>
            <input  value={input} onChange={(e) => setInput(e.target.value)} type="text" placeholder='Enter YOUR TODO ' className={style.input} />
            <button  className={style.button}><GrAddCircle size={30}/></button>
        </form>
        <ul>
            {todos.map((todo,index)=> 
                 ( <List key={index} todo={todo} togglecomplete={togglecomplete} deletetodo={deletetodo}/>
             ))}
            
        </ul>
      </div>
    </div>
  )
}
