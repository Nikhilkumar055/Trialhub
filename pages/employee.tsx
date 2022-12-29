import React from 'react'
import Header from './components/header'
import FilterIcon from './components/icons/filterIcon'
import GridIcon from './components/icons/gridIcon'
import Navbar from './components/Navbar/navbar'
import Sidebar from './components/sidebar'
function employee() {
  return (
    <div>
        <div id="heading">
        <Navbar/>
        <div id="employee-head" className='flex space-x-20 justify-between max-w-1280px mx-auto py-1 px-4 border-solid border-b border-black-500'>
            <div>
                <h3 className='font-bold my-3'>Employee</h3>
            </div>
            <div className="hidden md:inline-flex space-x-10 ">

                 <h3 className='my-3'>Search</h3>

                <FilterIcon / >
                <GridIcon / >
                <button className='border-2 px-6 hover:bg-black hover:text-white rounded-2xl'>Add</button>
            </div>
         </div>
         </div>
        <div id="sidebar" className='hidden md:flex'>
        <Sidebar />
        </div>
    </div>
  )
}

export default employee