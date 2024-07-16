import React from 'react'
import vite from "/vite.svg"

const Navbar = () => {
  return (
    <nav className='flex justify-around items-center gap-4 bg-blue-900 px-6 md:px-8 py-6 text-white sticky top-0 w-full'>
        <img src={vite} alt="logo" />
        <ul className='flex justify-center items-center gap-4 md:gap-6 font-semibold'>
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Posts</li>
            <li className='cursor-pointer'>Profile</li>
            <li className='cursor-pointer'>Settings</li>
        </ul>
    </nav>
  )
}

export default Navbar