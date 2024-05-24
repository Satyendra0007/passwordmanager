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
        <button className="button flex justify-center items-center gap-1 bg-primary p-2 rounded-full font-semibold text-sm">
          <IoLogoGithub size={22} />
          <span>GitHub</span>
        </button>
      </div>
    </nav>
  )
}
