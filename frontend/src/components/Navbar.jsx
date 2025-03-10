import React, { useState } from 'react';
import { assets } from '../assets/assets'; 
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();
  
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true); // Set to false if no token

  return (
      <div className='flex items-center justify-between text-sm py-1 mb-5 border-b border-b-gray-400'>
        <img onClick={() => navigate('/')} className='w-40 cursor-pointer'src={assets.logo}alt='HealthCare Logo'/>
        <ul className='hidden md:flex items-start gap-10 font-semibold'>

          <NavLink to='/'> 
            <li className='py-1'>HOME</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-10 m-auto hidden' />
          </NavLink>

          <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-10 m-auto hidden' />
          </NavLink>

          <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-10 m-auto hidden' />
          </NavLink>

          <NavLink
            to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr className='border-none outline-none h-0.5 bg-blue-500 w-10 m-auto hidden' />

          </NavLink>
        </ul>

        {/* Profile or Login Button */}
        <div className='flex items-center gap-4'>
          {
          token 
          ? <div className='flex items-center gap-2 cursor-pointer group relative'>
              <img className='w-8 rounded-full' src={assets.profile_pic} alt="" />
              <img className='w-4' src={assets.dropdown_icon} alt=""/>
              <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'> 

                  <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                  <p onClick={()=>navigate('my-appoinment')} className='hover:text-black cursor-pointer'>My Appoinment</p>
                  <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>

                </div>
              </div>
            </div>
            :<button onClick={() => navigate('/login')} className='bg-blue-500 text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer hover:bg-blue-600'> Create Account </button>
          }
        </div>
      </div>
  )
}

export default Navbar