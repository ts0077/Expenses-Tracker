import React from 'react'
import { NavLink } from 'react-router-dom'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const Home = () => {
  return (
    <div className="bg-purple-50 min-h-[89vh]  flex flex-col items-center justify-center p-3 text-center">
     
       <div className="w-[100px] h-[100px] sm:w-[280px] sm:h-[270px] mb-4">
        <DotLottieReact
          src="https://lottie.host/1d4c56e9-d242-445d-90dd-726344b85405/IKsUgaRBdm.lottie"
          loop
          autoplay
        />
      </div>

    
      <h1 className="text-4xl sm:text-6xl font-bold text-purple-700 mb-3">
        Track Your Expenses
      </h1>
      <h2 className="text-2xl sm:text-3xl text-gray-700 font-semibold mb-6">
        Right on <span className="text-purple-600">Expense Tracker</span>
      </h2>

  
      <NavLink to="/myexpenses">
        <button className="bg-purple-700 hover:bg-purple-800 text-white px-6 py-3 rounded-lg font-bold uppercase shadow-md transition duration-300 word-spacing-[5px] ">
          Track Expenses
        </button>
      </NavLink>
    </div>
  )
}

export default Home
