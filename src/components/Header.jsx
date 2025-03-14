import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    
      <header className='bg-slate-200 p-4 flex justify-between items-center shadow-md'>
        <div className='flex justify-between items-center w-full mx-auto p-3'>
        <Link to='/'>
      
        <h1 className='font-bold text-sm sm:text-xl flex flex-wap'>
            <span className='text-slate-500'>City</span>
            <span className='text-slate-700'>Estates</span>
        
        </h1>
        </Link>
        <form className='bg-slate-100 p-3 rounded-lg flex items-center'>
            <input 
            type='text' 
            placeholder='Search...' 
            className='bg-transparent focus:outline-none w-24 sm:w-64' />
            <FaSearch className='text-slate-600' />
          

        </form>
        <ul className='flex gap-4'>
           
           <Link to='/'>
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Home</li>
            </Link>
            <Link to='/about'>
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>About</li>
            </Link>
            <Link to='/profile'>
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Profile</li>
            </Link>
            <Link to='/sign-in'>    
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Sign In</li>
            </Link>
           

        </ul>
        </div>
      </header>
    
  )
}