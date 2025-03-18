import React from 'react'
import {FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'


export default function Header() {
  return (
    
      <header className='bg-slate-200 p-4 flex justify-between items-center shadow-md'>
        <div className='flex justify-between items-center w-full mx-auto p-3'>
        <Link to='/'>
      
        <h1 className='font-bold text-sm sm:text-xl flex flex-wap'>
            <span className='text-slate-500'>Estates</span>
            <span className='text-slate-700'>Comps</span>
        
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
            <Link to='/buy'>
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Buy</li>
            </Link>
            <Link to='/rent'>
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Rent</li>
            </Link>
            <Link to='/sign-in'>    
                <li className='font-bold hidden sm:inline text-slate-700 hover:underline'>Sign In</li>
            </Link>
           

        </ul>
        </div>
      </header>
    
  )
}