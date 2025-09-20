import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {

  return (
    <div className='w-full flex justify-around h-20 items-center border-2 border-black '>
        <h1 className='text-xl font-bold '>BlogVerse</h1>
        <Link to="/Home" className='text-gray-700 hover:bg-blue-200 px-5 py-2 rounded-lg cursor-pointer'>Home</Link>
        <div className='flex gap-5'>
            <Link to="/Signin" className='pt-2 font-semibold text-gray-700 cursor-pointer'>Sign In</Link>
            <Link to="/Signup" className='bg-blue-600 text-white px-5 py-2 rounded-xl cursor-pointer'>Sign Up</Link>
        </div>
    </div>
  )
}

export default NavBar