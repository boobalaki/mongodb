import { useState } from 'react'
import Singup from './Singup'
import Login from './Login'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
 

  return (
   <BrowserRouter>
   <Routes>
    <Route path='/register' element={<Singup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/mail' element={<mail/>}></Route>
   </Routes>
   </BrowserRouter>


  )
}

export default App
