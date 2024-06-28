import React from 'react'
import { IoLogoGithub } from "react-icons/io";

export default function Navbar() {
  return (
    <nav className='flex items-center justify-around py-2 bg-primary'>
      <div className="logo font-bold text-lg ">
        <span className='text-teal-600' > &lt; </span>
        <span>Pass
          <span className="">Op</span></span>
        <span className='text-teal-600' > /&gt;</span>
      </div>
      <div>
        <a href="https://github.com/Satyendra0007/passwordmanager.git" target='_blank'>
          <button className="button flex justify-center items-center gap-1 bg-primary border border-rose-500 p-2 rounded-full font-semibold text-sm md:hover:scale-105 transition-all duration-300 ease-in-out ">
            <IoLogoGithub size={22} />
            <span>GitHub</span>
          </button>
        </a>
      </div>
    </nav>
  )
}
