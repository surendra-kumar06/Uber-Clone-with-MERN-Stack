import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const CaptainSignup = () => { const [firstname, setFirstname] = useState('')
const [lastname, setLastname] = useState('')
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [userData, setuserData] = useState('')

const submitHandler = (e)=> {
  e.preventDefault();
  setuserData({
    fullname: {
      firstname: firstname,
      lastname: lastname,
    },
    email: email,
    password: password
  })
  // console.log(userData);
  
  setFirstname('')
  setLastname('')
  setEmail('')
  setPassword('')
}

return (
  <div className='p-7 pb-16 h-screen flex flex-col justify-between'>
  <div>
  <img className='w-20 mb-7' src='https://www.svgrepo.com/show/505031/uber-driver.svg' alt="Uber-Logo" />
<form onSubmit={submitHandler}>
<h3 className=' font-medium mb-2'>What's your name</h3>
<div className='flex gap-4 mb-6'>
<input type="text"
  required
  value={firstname}
  onChange={(e)=>{setFirstname(e.target.value)}}
  placeholder='first name' 
  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  placeholder:text-sm'/>
   <input type="text"
  required
  value={lastname}
  onChange={(e)=>{setLastname(e.target.value)}}
  placeholder='last name' 
  className='bg-[#eeeeee] w-1/2 rounded px-4 py-2 border  placeholder:text-sm'/>
</div>

 <h3 className=' font-medium mb-2'>What's your email</h3>
 <input type="email"
  required
  value={email}
  onChange={(e)=>{setEmail(e.target.value)}}
  placeholder='email@example.com' 
  className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full  placeholder:text-sm'/>
 <h3 className=' font-medium mb-2'>Enter Password</h3>
 <input type="Password" 
 required 
 value={password}
 onChange={(e)=>{setPassword(e.target.value)}}
 placeholder='password' 
  className='bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full  placeholder:text-sm'
 />
 <button type='submit' className='bg-[#111] font-semibold mb-3 rounded px-4 py-2 w-full text-white'>Signup</button>
</form>
<p className='text-center'>Already have a account?  <Link to='/captain-login' className='text-blue-600 '>Login here</Link></p>
  </div>
  <div>
  <p className='text-[9px] font-medium leading-tight mb-7'>
   This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy Policy </span> and <span className='underline'>Terms of Service apply</span>.
   </p>
  </div>
</div>
)
}

export default CaptainSignup