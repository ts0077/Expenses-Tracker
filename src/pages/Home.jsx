import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    
    <div className='bg-purple-100 min-h-[92vh] max-w-2xl mx-auto p-5'>

<div className='grid items-center justify-center'>

            <div className='grid mt-40 items-center justify-center gap-2'  >

            <h2 className='text-4xl font-bold'>Track Your Expenses</h2>
            <h2 className='text-2xl ml-4 font-semibold'>Right on EXPENSE TRACKER</h2>
            </div>

                <div className='mt-4 ml-19'>
                    <NavLink to={"/myexpenses"}>
                    <button className='uppercase bg-purple-700 text-white px-2 py-2 rounded font-bold cursor-pointer'>Manage Expenses</button>
                    </NavLink>
                </div>
</div>

    </div>
    
    </>
  )
}

export default Home
