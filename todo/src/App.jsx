 import React from 'react'
 import Signin from './Components/Signin'
 import Signup from './Components/Signup'
 import Account from './Components/Account'
 import {Route,Routes} from 'react-router-dom'
import AuthProvider from './Context/AuthContext'
import ProtectedRoute from './Components/ProtectedRoute'
import Todo from './Components/Todo'
 export default function App() {
   return (
     <div className='h-screen  w-screen  p-4 bg-gradient-to-r from-[#2F80ED] to-[#1CB5E0]'>
      <h1 className='text-center  font-bold  text-3xl '>Todo APP</h1>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Signin/>}/>
      <Route path='/todo' element={<Todo/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/account' element={<ProtectedRoute><Account/></ProtectedRoute>}/>
      </Routes>
      </AuthProvider>
     </div>
   )
 }
 