import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

function Navbar() {
  const [open, setOpen]=useState(false);
  const handleOpen=()=>{
    if(open===true){
      setOpen(false);
    }
    else{
      setOpen(true);
    }
  }
  return (
   <>
   <div className=" navbar p-4 flex justify-between bg-gray-800 text-gray-100 shadow-xl items-end">

    <div className="title flex items-center">
    <div className="logo">

    </div>
    <div className="text-xl cursor-pointer"><span className='font-bold'>Mark</span>Edit</div>
    </div>


    <div className="flex list-none gap-5 items-center">
      <div className=' hidden md:flex gap-10 cursor-pointer'>

      <NavLink to={"/"} className={({isActive})=> isActive
      ? "border-b-2 border-blue-500  font-medium"
      : "text-gray-200 "} ><li>Editor</li></NavLink>
        <NavLink to={"/guide"} className={({isActive})=> isActive
      ? "border-b-2 border-blue-500  font-medium"
      : "text-gray-200  "}><li>Markdown Guide</li></NavLink>
        </div>
         <div className='cursor-pointer'><ThemeToggle/></div>
         <div className='md:hidden relative cursor-pointer'>
      <button className='w-4 cursor-pointer' onClick={handleOpen} >{ open?<i className="fa-solid fa-xmark fa-xl"></i>:<i className="fa-solid fa-bars-staggered fa-lg"></i>}</button>
        {
          open&&
          <div className='absolute z-50 bg-gray-200 text-gray-900 list-none right-0 top-14 dark:text-gray-200 dark:bg-gray-900  py-6 w-52 h-screen flex flex-col  '>
             <NavLink to="/" className={({isActive})=> isActive
      ? "border-b-2 border-blue-500  font-medium"
      : "text-gray-200  "}>
             <li className='px-6 py-4 hover:bg-gray-700 hover:text-gray-200'>

             
              Editor
              
             </li></NavLink>
 <NavLink to={"/guide"} className={({isActive})=> isActive
      ? "border-b-2 border-blue-500  font-medium"
      : "text-gray-200  "}>
             <li className='px-6 py-4 hover:bg-gray-700 hover:text-gray-200 '>
             
              Markdown Guide
              
              </li>
              </NavLink>
          </div>
          }
    </div>
    </div>
    
   
   </div>
   </>
  )
}

export default Navbar