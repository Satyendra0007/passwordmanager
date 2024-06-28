
import './App.css'
import { CiSaveDown1 } from "react-icons/ci";
import List from './Component/List';
import { FaRegEyeSlash } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify';


function App() {

  const [formArray, setFormArray] = useState([])
  const [form, setForm] = useState({
    url: "",
    user: "",
    pass: ""
  })
  const [show, setShow] = useState(false)
  const passRef = useRef(null)

  const handleOnchange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const showPass = () => {
    passRef.current.type = !show ? "text" : "password"
    setShow(!show)
  }


  const saveToLocal = () => {
    localStorage.setItem("passwords", JSON.stringify(formArray))
  }

  const savePassword = () => {
    setFormArray([...formArray, { ...form, id: uuidv4() }])
    setForm({
      url: "",
      user: "",
      pass: ""
    })
    toast.success("Password Saved Successfully ")
  }

  const handleDelete = (id) => {
    const conf = confirm("Do you really want to delete !")
    if (conf) {
      const newArray = formArray.filter(elem => id !== elem.id)
      toast.success("Password Deleted Successfully ")
      setFormArray(newArray)
    }
  }

  const handleEdit = (id) => {
    const index = formArray.findIndex(elem => elem.id === id);
    setForm(formArray[index])
    const newArray = formArray.filter(elem => id !== elem.id)
    setFormArray(newArray)
  }

  useEffect(() => {
    if (localStorage.getItem("passwords"))
      setFormArray(JSON.parse(localStorage.getItem("passwords")))
  }, [])

  useEffect(() => {
    if (formArray.length !== 0)
      saveToLocal();
  }, [formArray])

  return (

    <>

      <div className="intro mycontainer mx-auto flex flex-col items-center justify-center my-3">
        <div className="logo">
          <div className="logo font-bold text-xl text-primary ">
            <span> &lt; </span>
            <span>Pass
              <span className="">Op</span></span>
            <span> /&gt;</span>
          </div>
        </div>
        <p className='text-gray-800 font-semibold '>Your Password Manager</p>
      </div>


      <div className="mycontainer p-3 space-y-3">
        <div className="url ">
          <input className=' w-full p-2.5 border border-rose-500 rounded-xl' placeholder='Enter the Url' type="text" name='url' onChange={handleOnchange} value={form.url} />
        </div>
        <div className="userpss space-y-3 md:flex md:space-y-0 md:gap-4">
          <input className=' w-full p-2.5 border border-rose-500 rounded-xl' placeholder='Enter the UserName' type="text" name='user' onChange={handleOnchange} value={form.user} />
          <div className='relative md:w-1/2'>
            <input ref={passRef} className=' w-full p-2.5 border border-rose-500 rounded-xl' placeholder='Enter the Password' type="password" name="pass" onChange={handleOnchange} value={form.pass} id="" />
            <span className='absolute top-3.5 right-2 cursor-pointer' onClick={showPass}> {show ? <FaRegEye /> : <FaRegEyeSlash />} </span>
          </div>
        </div>
        <div className="button">
          <button disabled={(form.url == "") || (form.user == "") || (form.pass == "")} className="button flex justify-center items-center gap-1 bg-primary py-2 px-4 rounded-full font-semibold cursor-pointer md:hover:rotate-6 transition-all duration-30000 ease-in-out" onClick={savePassword}>
            <CiSaveDown1 size={22} /><span>Save</span></button>
        </div>
      </div>

      <div className="passwordlist mycontainer  max-w-7xl ">
        <h1 className='my-3  font-bold text-xl bg-primary text-center py-2'>Your Passwords </h1>
        <div className="list space-y-2">
          {formArray.map((form) => {
            return <List key={form.id} {...form} handleDelete={handleDelete} handleEdit={handleEdit} />
          })}
        </div>
      </div>
    </>
  )
}

export default App
