import React from 'react'
import { FaGlobeAfrica } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaCopy } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function List({ id, url, user, pass, handleEdit, handleDelete }) {

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    toast('Text Copied', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (
    <>

      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />

      {/* ---------------- for md devices --------------------------  */}
      <div className='hidden bg-secondory p-2 md:flex justify-between  shadow-xl  space-y-3 '>
        <div className="details flex  font-bold text-gray-800 w-full px-2">
          <div className="site  w-1/3 flex justify-start gap-2 items-center"> <FaGlobeAfrica /> <a href="">{url}</a> <FaCopy className='cursor-pointer' onClick={() => handleCopy(url)} /></div>
          <div className="user w-1/3 flex justify-start gap-2 items-center"> <FaUser /> {user} <FaCopy className='cursor-pointer' onClick={() => handleCopy(url)} /></div>
          <div className="pass w-1/3 flex justify-start gap-2 items-center"> <RiLockPasswordFill />{pass} <FaCopy className='cursor-pointer' onClick={() => handleCopy(url)} /></div>
        </div>
        <div className="action flex justify-between  items-center gap-2">
          <button className='' onClick={() => handleEdit(id)}><lord-icon
            src="https://cdn.lordicon.com/ylvuooxd.json"
            style={{ width: "28px", height: "28px" }}
            trigger="hover">
          </lord-icon></button>
          <button className='' onClick={() => handleDelete(id)}> <lord-icon
            src="https://cdn.lordicon.com/hjbrplwk.json"
            style={{ width: "28px", height: "28px" }}
            trigger="hover">
          </lord-icon></button>
        </div>
      </div >

      {/* ---------------- for sm devices --------------------------  */}

      <div className='bg-secondory p-2 shadow-xl space-y-3 md:hidden'>
        <div className="details font-semibold text-gray-800 w-full px-2">
          <div className="site flex items-center gap-3 "> <FaGlobeAfrica /> <a href="">{url}</a><FaCopy className='cursor-pointer' onClick={() => handleCopy(url)} /></div>
          <div className="user flex items-center gap-3"><FaUser />  {user} <FaCopy className='cursor-pointer' onClick={() => handleCopy(user)} /></div>
          <div className="pass flex items-center gap-3"> <RiLockPasswordFill />{pass} <FaCopy className='cursor-pointer' onClick={() => handleCopy(pass)} /></div>
        </div>
        <div className="action flex justify-end items-center gap-x-2">
          <button className='' onClick={() => handleEdit(id)}><lord-icon
            src="https://cdn.lordicon.com/ylvuooxd.json"
            style={{ width: "28px", height: "28px" }}
            trigger="hover">
          </lord-icon></button>
          <button className='' onClick={() => handleDelete(id)}> <lord-icon
            src="https://cdn.lordicon.com/hjbrplwk.json"
            style={{ width: "28px", height: "28px" }}
            trigger="hover">
          </lord-icon></button>
        </div>
      </div >
    </>
  )
}
