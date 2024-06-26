import React from 'react'

function Navbar() {
  return (
    <div className= "sticky top-0 z-50 flex items-center justify-center w-full h-20 bg-gray-400 bg-opacity-50 sm:justify-between">
        <img src="https://assets-global.website-files.com/63359abeb97bf0d5ca346052/6336e2cc37e3c15b9c7c4487_Logo_new.png" className='w-auto h-10 sm:ml-10'/>
        <div className='hidden sm:flex'><div className='p-4 hidden sm:flex mr-10 font-bold text-white bg-black rounded-full hover:mt-[-10px] hover:bg-amber-500 hover:text-black'>Assesment Submission</div>
    </div></div>
  )
}

export default Navbar