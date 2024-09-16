import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='w-full flex items-center px-4 absolute top-0 left-0 z-30 md:px-10 gap-x-3 py-2'>
        <Link to={'https://github.com/Bhootna8'} className='text-2xl mr-auto font-bold bg-white shadow-md rounded-md px-[10px] py-2 text-blue-500 cursor-pointer'>SK</Link>

        <Link className='text-xl font-semibold text-blue-800 ' to={'/about'}>About</Link>
        <Link className='text-xl font-semibold text-blue-800 ' to={'/projects'}>Projects</Link>
    </nav>
  )
}

export default Navbar