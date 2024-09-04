import React from 'react'
import Home from './Components/Home'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import About from './Components/About'
import Contact from './Components/Contact'
import Joblisting from './Components/Joblisting'
import Jobdetails from './Components/Jobdetails'
import Navbars from './Components/Navbars'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
const App = () => {
  return (
    <BrowserRouter>
    <>
    <Navbars/>
    <Routes>
   
    <Route path='/home' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/joblisting' element={<Joblisting/>}></Route>
    <Route path='/jobdetails' element={<Jobdetails/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
 
    </>
    </BrowserRouter>
  )
}

export default App
