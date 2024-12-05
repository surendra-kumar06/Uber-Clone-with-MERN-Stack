import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainLogin = () => {
  const [captainData, setCaptainData] = useState({
    email: '',
    password: ''
  })

  const submitHandler = (e)=>{
    e.preventDefault();
   setCaptainData({
    email: '',
    password: ''
  });
   console.log(captainData);
    
  }

  return (
    <div className='p-7 pb-16 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt="Uber-Logo" />
     <form onSubmit={submitHandler}>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input type="email"
       required
       value={captainData.email}
       onChange={(e)=>{setCaptainData({...captainData,email: e.target.value})}}
       placeholder='email@example.com' 
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'/>
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input type="Password" 
      required 
      value={captainData.password}
      onChange={(e)=>{setCaptainData({...captainData,password: e.target.value})}}
      placeholder='password' 
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      />
      <button type='submit' className='bg-[#111] font-semibold mb-3 rounded px-4 py-2 w-full text-white'>Login</button>
     </form>
     <p className='text-center'>Join a fleet?  <Link to='/captain-signup' className='text-blue-600 '>Register as Captain</Link></p>
       </div>
       <div>
       <Link to='/login'>
       <button  className='bg-[#d5622d] font-semibold mb-6 rounded px-4 py-2 w-full text-white'>Sign in as User</button>
       </Link>
       </div>
    </div>
  )
}

export default CaptainLogin