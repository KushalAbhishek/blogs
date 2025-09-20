import React from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';


const Signup = () => {
  return (
    <div className='flex items-center flex-col  gap-5'>
      <NavBar />
      <h1 className='text-2xl text-blue-600 font-bold'>Join BlogVerse</h1>
      <p className='text-xl text-gray-600 text-center font-semibold '>Create your account <br></br>and start your blogging journey today</p>
      <form className='flex flex-col border-1 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl'>
        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Full Name</p>
          <div className='relative'>
              <input className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500' type='text' placeholder='Enter your full name' />
            <User className='absolute top-4 left-3 text-gray-400'/>
          </div>
          
        </div>
        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Email Address</p>
          <div className='relative'>
              <input className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500' type='text' placeholder='Enter your email address' />
              <Mail className='absolute top-4 left-3 text-gray-400' />
          </div>
          
        </div>
        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Password</p>
          <div className='relative'>
            <input className='border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500 pl-12' type='password' placeholder='Create a strong password' />
            <KeyRound className='absolute top-4 left-3 text-gray-400 '/>
          </div>
        </div>
        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Confirm Password</p>
          <div className='relative'>
              <input className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500' type='password' placeholder='Re-enter your password' />
            <KeyRound className='absolute top-4 left-3 text-gray-400 '/>
          </div>
        </div>
        <div className='flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center'>
          <input type='checkbox' className='h-5 w-5' />
          <p>I agree to the <span className='text-purple-600 hover:underline cursor-pointer'>Terms of Service</span>  and <span className='text-purple-600 hover:underline cursor-pointer'>Privacy Policy</span></p>
        </div>
        <button className=' flex justify-center gap-3 w-[87%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-3'><CircleUser /><p>Create Account</p></button>
        <p>Already have an account? <Link to="/Signin" className='text-purple-600 hover:underline cursor-pointer'>Sign in here</Link></p>
        <Link to="/Home" className='bg-gray-200 font-semibold hover:bg-gray-300 cursor-pointer py-3 w-[45%] rounded-xl flex justify-center'>Back to Home</Link>
      </form>
    </div>
  )
}

export default Signup