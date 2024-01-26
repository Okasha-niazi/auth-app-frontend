import React, { useState } from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {ToastContainer, toast } from 'react-toastify';
import { useNavigate } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate() 


  
  const [data, setData] = useState({
    name: "",
    email:"",
    password:""
  });

 function handelChange(e) {
const {name, value } = e.target;
setData(
  (per) =>( {
...per,

[name] : value

  })
)

 }

 const handleSubmit = async(e) =>{
  e.preventDefault();

   const body = {
    "username": data.name,
    "email": data.email,
    "password": data.password
}

try {
  const response = await axios.post("https://charming-pig-pullover.cyclic.app/user/register", body)
console.log(response.data)
  if (response.status === 201) {
    toast.success("Register Successfully");
   navigate("/home");
  } else if (response.status === 409) {
    toast.error("Unsuccessful response status");
  } else {
    console.log("Unexpected response status:", response.status);
  }
} catch (error) {
  toast.error("api data error")

}
 }

  return (
    


    <div className='container w-screen h-screen'>
<form onSubmit={handleSubmit} className="max-w-sm mx-auto pt-[150px]">
    <h1 className='text-center font-bold text-[30px]'>Register now</h1>
<div className="mb-5 mt-5">
    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Full Name</label>
    <input type="text" id="name" name="name" value={data.name} onChange={handelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="Enter your Full Name" />
  </div>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" name="email" value={data.email} onChange={handelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@gmail.com"/>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" name="password" value={data.password} onChange={handelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "/>
  </div>

  <div className="mb-5">
  <p>
    Already have an account? <Link to={"/login"} className='text-blue-600 hover:cursor-pointer hover:font-bold'> Login</Link>
  </p>
</div>



<div className='w-full'><Button type_btn="submit" btn_name="Submit" /></div>
  
</form>
<ToastContainer />

<br/>
<br/>
<br/>
<br/>

<div className="mb-5">
  <p>
    <Link to={"/figmabtn"} className='text-blue-600 hover:cursor-pointer hover:font-bold'> Buttons</Link>
  </p>
</div>
</div>

  )
}

export default Register