import React from 'react'
import Uberlogo from '../assets/Images/uberlogo.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1692910410341-cf21779ebbe4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen w-full bg-red-400 flex flex-col justify-between">
        <img className='w-20 mt-8 ml-9' src={Uberlogo} alt="Uber-Logo" />
        <div className='bg-white  p-4 pb-20'>
          <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
          <Link to='/login' className='flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5 text-lg'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home