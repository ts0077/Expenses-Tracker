import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
     <nav className='bg-purple-900 text-white uppercase font-bold flex justify-between items-center p-2 '>
        <div className="logo ml-3 text-2xl  ">Expense Tracker</div>
        <div>
            <ul className='flex gap-6 mr-5 p-2 text-lg '>
                <li><NavLink className={({isActive})=>isActive ? "bg-white text-purple-700 px-2 py-1.5": "px-2 py-1.5"} to={"/"}>HOME</NavLink></li>
                <li><NavLink className={({isActive})=>isActive ? "bg-white text-purple-700 px-2 py-1.5": "px-2 py-1.5"} to={"/myexpenses"}>MY-EXPENSES</NavLink></li>
               
            </ul>
        </div>
     </nav>
    </div>
  )
}

export default Navbar
