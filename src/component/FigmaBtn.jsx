import React from 'react'

const FigmaBtn = () => {
  return (
    <div className='w-[100vw] container'>
    {/* 1 */}
    <div className='w-[100%]'> 
        <button type="button" className="text-[#3F3F3F] bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]  font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#AEAEAE]  dark:hover:bg-[#AEAEAE]  focus:outline-none dark:focus:bg-[#AEAEAE] dark:text-[#3F3F3F] w-[100%]">
            Default</button>
    </div>


  
{/* 2 */}
<div  className='w-[10%]'> 
<button type="button" className="py-2.5 px-5 mb-2 text-sm font-medium text-[#3D5AFE] focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  w-[100%]">
    Default</button>
</div>




{/* 3*/}
<div  className='w-[10%]'> 
<button type="button" className="py-2.5 px-5 mb-2 text-sm font-medium text-[#3D5AFE] focus:outline-none bg-white rounded-lg border border-gray-200 hover:border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700  w-[100%]">
    Default</button>
</div>



{/* 4*/}
<div  className='w-[10%]'> 
<button type="button" className="text-white bg-blue-700 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%]">
    Default</button>
</div>


{/* 5 */}
<div  className='w-[10%]'> 
<button className="py-2.5 px-5 mb-2 text-sm border border-[#9E9E9E] bg-[#E0E0E0] text-[#9E9E9E] rounded-lg opacity-50 cursor-not-allowed w-[100%]" disabled>
  Disabled
</button>
</div>



{/* 6 */}
<div  className='w-[10%]'> 
<button className="py-2.5 px-5 mb-2 text-sm border border-white bg-[#FFFF] text-[#9E9E9E] rounded-lg opacity-50 cursor-not-allowed w-[100%]" disabled>
  Disabled
</button>
</div>



{/* 7 */}
<div  className='w-[10%]'> 
<button type="button" className=" py-2.5 px-5 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:border-gray-200 hover:bg-blue-800  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center flex items-center justify-center  w-[100%]">
<svg className="w-3.5 h-3.5 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
Default
</button>
</div>


{/* 8 */}
<div  className='w-[10%]'> 
<button type="button" className=" py-2.5 px-5 mb-2 text-sm font-medium text-white focus:outline-none bg-blue-700 rounded-lg border border-gray-200 hover:border-gray-200 hover:bg-blue-800  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 text-center flex items-center justify-center  w-[100%]">
Default
<svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 21">
<path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z"/>
</svg>
</button>
</div>


{/* 9 */}
<div  className='w-[10%]'> 
<button type="button" class="px-5 py-2.5 text-sm font-medium text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 text-center w-[100%]">
    Sm</button>
</div>


<br/>

{/* 10 */}
<div  className='w-[10%]'> 
<button type="button" class="px-5 py-3 text-base font-medium text-center  text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[100%]">
    Md</button>
</div>


<br/>


{/* 11 */}
<div  className='w-[10%]'> 
<button type="button" class="px-6 py-3.5 text-base font-medium text-white  bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[100%]">
    Lg</button>

</div>



<br/>

{/* 12 */}
<div  className='w-[10%]'> 
<button type="button" class="focus:outline-none text-black bg-[#E0E0E0] hover:bg-gray-500 focus:ring-4 focus:ring-[#E0E0E0] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#E0E0E0] dark:hover:[#3F3F3F] dark:focus:[#3F3F3F] w-[100%]">
Default</button>
</div>




<br/>

{/* 13 */}
<div  className='w-[10%]'> 
<button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 w-[100%]">Default</button>

</div>



<br/>

{/* 14 */}
<div  className='w-[10%]'> 
<button type="button" class="focus:outline-none text-white bg-[#455A64] hover:bg-[#1C313A] focus:ring-4 focus:ring-[#E0E0E0] font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-[#E0E0E0] dark:hover:[#3F3F3F] dark:focus:[#3F3F3F] w-[100%]">
Default</button>
</div>



<br/>

{/* 15 */}
<div  className='w-[10%]'> 
<button type="button" class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 w-[100%]">
Danger</button>
</div>


    </div>
  )
}

export default FigmaBtn