import React from 'react'
import {UseAuth} from '../Context/AuthContext'
import { useNavigate } from 'react-router-dom'
export default function Account() {
  const {user,signout} = UseAuth()
 const navigate = useNavigate()
  const handlelogout = async() =>{
  try{
       await signout()
       navigate('/')
  }
  catch (e){
     console.log(e.message)
  }
  }
  return (
    <div className=' max-w-[640px] mx-auto  my-16 py-4'>
      <h1 className='font-bold  py-2  text-3xl'>Account</h1>
      <p>
        User Email:{user && user.email}
      </p>
      <button className='border border-cyan-500  px-6 py-2 my-4' onClick={handlelogout}>
        Logout
      </button>
    </div>
  )
}
