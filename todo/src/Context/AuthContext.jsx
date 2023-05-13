import React, { useEffect, useState } from 'react'
import { useContext, } from 'react'
import {auth} from '../Firebase'
import {createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged} from 'firebase/auth'


// create a ccontext
const AuthContext= React.createContext()


// function to use Auth Context
export function UseAuth(){
    return useContext(AuthContext)
}


// context provider
export default function AuthProvider({children}) {
    // this is for on auth state changed case and it should be an object
    const [user,setuser]=useState({})

    // create user
    const signup = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
  
    // sign in 
    const signin = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    // signout 
    const signout = () => {
        return signOut(auth)
    }
       
  // to see if user logged in or not
  useEffect(() => {
    const unsubscribe=onAuthStateChanged(auth, (currentuser) => {
         setuser(currentuser)
    })
     return () => {
        unsubscribe()
     }
  },[])

    // value to be passed
    const value={
         signup,
         signin,
         user,
         signout
    }
  return (
     <AuthContext.Provider value={value} >
        {children}
     </AuthContext.Provider>
  )
}
