import React from 'react'
import { Link } from 'react-router-dom'

export default function NavLink({destination,btnName}) {
  return (
    <Link href={destination}  className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'>{btnName}</Link>
  )
}
