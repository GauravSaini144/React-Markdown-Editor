import { useState } from 'react'

import MarkdownEditor from './components/MarkdownEditor'
import Navbar from './components/Navbar'
import HelpPage from './components/HelpPage'
import {Routes, Route} from "react-router-dom"
import './App.css'

function App() {
  

  return (
    <>

    <Navbar/>
    <Routes>
     <Route path='/' element={<MarkdownEditor/>} /> 
     <Route path='guide' element={<HelpPage/>} />  
     </Routes>
    </>
  )
}

export default App
