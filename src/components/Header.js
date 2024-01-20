import React from 'react'
import logo from "../assets/Yt_logo.webp"
import { FaBars } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import {Link} from "react-router-dom"

const Header = () => {
  return (
    <div className='flex items-center justify-between px-4'>
      {/* Logo and bars*/}
      <div className='flex items-center gap-4'>
        <FaBars />
        <Link to="/"><img src={logo} className="w-[136px]" alt="" /></Link>
      </div>

      <div className='w-[40%]  border-2 border-[rgba(255,255,255,0.1)] relative rounded-full overflow-hidden'>
         <input type="text" className='w-full py-2 bg-transparent px-6' placeholder='Search'/>
         <IoIosSearch className='bg-[rgba(255,255,255,0.1)] absolute right-0 top-[50%] -translate-y-[50%] h-full w-[70px] px-5' /> 
      </div>
    </div>
  )
}

export default Header