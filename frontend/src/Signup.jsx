import React, { useState } from 'react'
import NavBar from './NavBar'
import { Link } from 'react-router-dom'
import { CircleUser } from 'lucide-react';
import { KeyRound } from 'lucide-react';
import { Mail } from 'lucide-react';
import { User } from 'lucide-react';
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react"



const Signup =() => {
  const [formData,setFormData]=useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const [errors,setErrors]=useState({
    fullName:"",
    email:"",
    password:"",
    confirmPassword:""
  })

  const [showPassword,setShowPassword] = useState(false);
  const [showConfirmPassword,setShowConfirmPassword] = useState(false);
  const [error,setError] = useState('')
  const [success,setSuccess] =useState('')

  const handleSubmit=(event)=>{
    event.preventDefault();
    
    let newErrors={}
      if(!formData.fullName){
        newErrors.fullName="Please enter your full name"
      }
      if(!formData.email){
        newErrors.email="Please enter you email"
      }
      if(!formData.password){
        newErrors.password="Please enter password"
      }
      if(!formData.confirmPassword){
        newErrors.confirmPassword="Please confirm your password"
      }
      else if(formData.password !== formData.confirmPassword){
        newErrors.confirmPassword="Your passwords are duifferent"
      }
      
      if(Object.keys(newErrors).length>0){
        setErrors(newErrors);
      } 
      else{
        setSuccess("Your account has been created");
        setFormData({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
      }
    }
    /* if(!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword){
      showError("Please fill all the fields");
    }
    else if(formData.password !== formData.confirmPassword){
      showError("Your passwords did not match");
    }
    else {
      setSuccess("Your account is created successfully")
      setError('')
      setFormData({
        fullName:"",
        email:"",
        password:"",
        confirmPassword:""
      })
    } */
  }

  const handlePassword =()=>{
    setShowPassword((password)=>!password);

  }

  const handleConfirmPassword = () => {
    setShowConfirmPassword((password)=>!password);
  }

  const handleChange=(event)=>{
    setError('')
    setSuccess('')
    setFormData((formData)=>({
      ...formData,
      [event.target.name]:event.target.value
    }))
    setErrors((errors) => ({
        ...errors,
        [event.target.name]: ""
    }))
  }

  return (
    <div className='flex items-center flex-col  gap-5'>
      <NavBar />
      <h1 className='text-2xl text-blue-600 font-bold'>Join BlogVerse</h1>
      <p className='text-xl text-gray-600 text-center font-semibold '>Create your account <br></br>and start your blogging journey today</p>
      <form onSubmit={handleSubmit} className='flex flex-col border-1 border-gray-400 w-1/3 py-7 items-center gap-5 mb-5 rounded-2xl'>
        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Full Name</p>
          <div className='relative'>
              <input 
                
                onChange={handleChange}
                value={formData.fullName}
                className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'
                name='fullName' 
                type='text' 
                placeholder='Enter your full name' 
              />
            <User className='absolute top-4 left-3 text-gray-400'/>
          </div>
          {errors.fullName && <p>{errors.fullName}</p>}
        </div>

        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Email Address</p>
          <div className='relative'>
              <input 
                
                value={formData.email}
                onChange={handleChange} 
                className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500'
                name='email' 
                type='text' 
                placeholder='Enter your email address' 
              />
              <Mail className='absolute top-4 left-3 text-gray-400' />
          </div>
          {errors.email && <p>{errors.password}</p>}
        </div>
        

        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Password</p>
          <div className='relative'>
            <input
                
                value={formData.password}
                onChange={handleChange} 
                className='border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500 pl-12' 
                name="password" 
                type={showPassword?"password":"text"} 
                placeholder='Create a strong password' 
            />
            <KeyRound className='absolute top-4 left-3 text-gray-400 '/>
            <span onClick={handlePassword}>{showPassword ? <Eye className='absolute right-3 top-4'/> : <EyeOff className='absolute right-3 top-4'/>}</span>
          </div>
          {errors.password && <p>{errors.password}</p>}
        </div>
        

        <div className='w-[90%] flex flex-col gap-2'>
          <p className='text-md text-gray-700 font-semibold'>Confirm Password</p>
          <div className='relative'>
              <input 
                  
                  value={formData.confirmPassword}
                  onChange={handleChange}  
                  className='pl-12 border-1 border-gray-700 w-full py-4 px-3 rounded-xl focus:outline-none focus:border-purple-500' 
                  name='confirmPassword' 
                  type={showConfirmPassword?"password":"text"} 
                  placeholder='Re-enter your password' 
              />
            <KeyRound className='absolute top-4 left-3 text-gray-400 '/>
            <span onClick={handleConfirmPassword}>{showConfirmPassword ? <Eye className='absolute right-3 top-4'/> : <EyeOff className='absolute right-3 top-4'/>}</span>
          </div>
          {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
        </div>

        <div className='flex gap-2 border-1 border-gray-800 w-[90%] py-5 px-4 rounded-xl items-center justify-center'>
          <input type='checkbox' className='h-5 w-5' />
          <p>I agree to the <span className='text-purple-600 hover:underline cursor-pointer'>Terms of Service</span>  and <span className='text-purple-600 hover:underline cursor-pointer'>Privacy Policy</span></p>
        </div>

        {error && <p className='text-red-500'>{error}</p>}
        {success && <p className='text-green-500'>{success}</p>}

        <button 
            type='submit' 
            className=' flex justify-center gap-3 w-[87%] bg-purple-500 py-4 text-white rounded-xl font-semibold mt-3'>
            <CircleUser />  
            <p>Create Account</p>
        </button>

        <p>Already have an account? <Link to="/Signin" className='text-purple-600 hover:underline cursor-pointer'>Sign in here</Link></p>

        <Link to="/Home" className='bg-gray-200 font-semibold hover:bg-gray-300 cursor-pointer py-3 w-[45%] rounded-xl flex justify-center'>Back to Home</Link>

      </form>
    </div>
  )


export default Signup