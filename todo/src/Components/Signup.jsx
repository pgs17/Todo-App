import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UseAuth } from '../Context/AuthContext'
export default function Signup() {

  // states to track values
  const[email,setemail] = useState('')
  const[password,setpassword] = useState('')
  const[error,seterror] = useState('')

  // to use context we destructure the values to be used
  const {signup}=UseAuth()
   

  // to navigate back'
  const navigate = useNavigate()
const handlesubmit = async(e) => {
  // to avoid refresh
  e.preventDefault()
  seterror('')
  try{
      await signup(email,password)
      navigate('/account')
  } catch (e){
    seterror(e.message)
    console.log(error)
  }

}

  return (
    <div className=' max-w-[700px]  mx-auto  my-16 p-4'>
      <div>
        <h1 className='py-2 font-bold text-2xl'>New User? Sign Up : Sign In</h1>
        <p className=' py-2'>
          Already Have an account <Link to='/' className=' underline'>Sign in</Link>
        </p>
      </div>                                       
       <form onSubmit={handlesubmit} >
        <div className=' flex flex-col py-2'>
          <label className='py-2 font-medium' > Email </label>
          <input type="email" value={email} onChange={(event)=> setemail(event.target.value)} placeholder='Enter Your Email'  />
        </div>
        <div className=' flex flex-col py-2'>
          <label  className='py-2 font-medium'> Password </label>
          <input type="Password" value={password} onChange={(event) => setpassword(event.target.value)} placeholder='Enter Your Password'  />
        </div>
        <button className='border border-blue-200 bg-blue-600 hover:bg-orange-300 w-full p-4 my-2 text-gray-300'> Sign UP</button>
       </form>
    </div>
  )
}
