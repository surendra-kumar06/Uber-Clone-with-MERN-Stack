import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const submitHandler = (e)=>{
    e.preventDefault();
   setUserData({
    email: '',
    password: ''
  });
   console.log(userData);
    
  }

  return (
    <div className='p-7 pb-16 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-20 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' alt="Uber-Logo" />
     <form onSubmit={submitHandler}>
      <h3 className='text-lg font-medium mb-2'>What's your email</h3>
      <input type="email"
       required
       value={userData.email}
       onChange={(e)=>{setUserData({...userData,email: e.target.value})}}
       placeholder='email@example.com' 
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'/>
      <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
      <input type="Password" 
      required 
      value={userData.password}
      onChange={(e)=>{setUserData({...userData,password: e.target.value})}}
      placeholder='password' 
       className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
      />
      <button type='submit' className='bg-[#111] font-semibold mb-3 rounded px-4 py-2 w-full text-white'>Login</button>
     </form>
     <p className='text-center'>New here?  <Link to='/signup' className='text-blue-600 '>Create new Account</Link></p>
       </div>
       <div>
       <Link to='/captain-login'>
       <button  className='bg-[#10b461] font-semibold mb-6 rounded px-4 py-2 w-full text-white'>Sign in as Captain</button>
       </Link>
       </div>
    </div>
  )
}

export default UserLogin