import React from 'react'

const Button = ({type_btn, btn_name}) => {
  return (
    <button type={type_btn}  className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
    w-full">
<span className="relative px-5 py-2.5 w-full transition-all ease-in duration-75 rounded-md group-hover:bg-opacity-0">
      {btn_name}
    </span>
  </button>
  )
}

export default Button