import React, { useState } from 'react'
import Button from '../component/Button'
import { Link } from 'react-router-dom'
import axios from 'axios';
import {toast } from 'react-toastify';


const Login = () => {
  const [data, setData] = useState({
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
    "email": data.email,
    "password": data.password
}

try {
  const response = await axios.post("https://charming-pig-pullover.cyclic.app/user/login", body)
  
  console.log(response.data)
  if (response.status === 201) {
    toast.success("Register Successfully");
  } else if (response.status === 409) {
    toast.error("Unsuccessful response status");
  } else {
    console.log("Unexpected response status:", response.status);
  }
} catch (error) {
  toast.error("api data error")
  
}

 }

 console.log(data)
  return (
    <div className='container w-screen h-screen'>
        

        <form onSubmit={handleSubmit} className="max-w-sm mx-auto pt-[150px]">

<h1 className='text-center font-bold text-[30px]'>Login</h1>
  <div className="mb-5">
    <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
    <input type="email" id="email" name="email" value={data.email} onChange={handelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="name@flowbite.com"/>
  </div>
  <div className="mb-5">
    <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
    <input type="password" id="password" name="password" value={data.password} onChange={handelChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "/>
  </div>

  <div className="mb-5">
  <p>
    Don't have an account? <Link to={"/"} className='text-blue-600 hover:cursor-pointer hover:font-bold'>Register</Link>
  </p>
</div>


<div className="mb-5">
  <p>
   Login  <Link to={"/list"} className='text-blue-600 hover:cursor-pointer hover:font-bold'> List</Link>
  </p>
</div>


<div className='w-full'><Button type_btn="submit" btn_name="Submit" /></div>


 
</form>

    </div>
  )
}

export default Login