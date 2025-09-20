import React from 'react'
import Signup from './Signup'
import Signin from './Signin'
import Home from './Home'
import { Routes,Route } from 'react-router-dom'


const App = () => {
  return (
    <Routes>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/Signin' element={<Signin/>}/>
      <Route path='/Home' element={<Home/>}/>
    </Routes>
  )
}

export default App