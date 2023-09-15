import React, { useRef } from 'react'
import  {useState} from 'react'
import { checkValidData } from '../Utills/Validations'
import { NETFLIX_BACKGROUND_URL } from '../Utills/Constants'
const Login = () => {
  const [isSignin,setIsSignin]=useState(true)
  const [errorMessege,setErrorMessege]=useState(null)
  const toggleState=()=>{
    setIsSignin(!isSignin)
  }
  const email=useRef(null)
  const password=useRef(null)
  const handleListner=()=>{
    setErrorMessege(checkValidData( email.current.value,password.current.value))//why no destructuring
  }
  return (
    <div className='absolute'>
        <div>
            <form onSubmit={(e)=>e.preventDefault()} className=' rounded-md shadow-md bg-opacity-90 bg-black text-white absolute mx-[500px]  my-28 px-16 py-10' action="">
            {isSignin?<h1 className='font-semibold text-4xl my-10'>Sign In</h1>:<h1 className='font-semibold text-4xl my-10'>Sign Up</h1>}
            {!isSignin&&<input className=' rounded-md w-full bg-gray-700 mt-8  p-4 ' type='text' placeholder='Name'/>}
                <input ref={email}  className='  rounded-md w-full bg-gray-700 mt-10 p-4' placeholder='Email id' type="text" />
                <input ref={password} className=' rounded-md w-full bg-gray-700 mt-8  p-4 ' type='password' placeholder='Password'/>
                {errorMessege&&<p className=' px-2 pt-8 text-red-600'>* {errorMessege}</p>}
                <button onClick={handleListner} className=' font-bold w-full rounded-md mt-8 p-4 bg-red-600'>{isSignin?'Sign-In':'Sign-Up'}</button>
                <div className='flex gap-2'>
                  <p className='text-sm mt-8 text-gray-600'>New to Netflix?</p>
                  <p onClick={toggleState} className='cursor-pointer text-sm mt-8'> Sign Up</p>
                </div>
            </form> 
        </div>
        <img className='bg-gradient-to-r from-cyan-500 to-blue-500' src={NETFLIX_BACKGROUND_URL} alt="" srcset="" />
        </div>
          )
}

export default Login