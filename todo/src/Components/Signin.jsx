import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../Context/AuthContext'

export default function Signin() {
  const {signin} = UseAuth()
  const[email,setemail]=useState('')
  const[password,setpassword]=useState('')
  const Navigate = useNavigate()
  const handlesubmit = async(e) => {
      e.preventDefault()
      try{
         await signin(email,password)
         Navigate('/account')
      }
      catch (e){
        console.log(e.message)
      }
  }
  return (
    <div className=' max-w-[700px]  mx-auto  my-16 p-4'>
      <div>
        <h1 className='py-2 font-bold text-2xl'>Old User? Sign In : Sign Up</h1>
        <p className=' py-2'>
          First Time Visit Then  <Link to='/signup' className=' underline'>Sign UP</Link>
        </p>
      </div>                                       
       <form onSubmit={handlesubmit}>
        <div className=' flex flex-col py-2'>
          <label className='py-2 font-medium' > Email </label>
          <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder='Enter Your Email'  />
        </div>
        <div className=' flex flex-col py-2'>
          <label  className='py-2 font-medium'> Password </label>
          <input type="Password" value={password} onChange={(e) => setpassword(e.target.value)} placeholder='Enter Your Password'  />
        </div>
        <button className='border border-blue-200 bg-blue-600 hover:bg-orange-300 w-full p-4 my-2 text-gray-300'> Sign IN</button>
       </form>
    </div>
  )
}
