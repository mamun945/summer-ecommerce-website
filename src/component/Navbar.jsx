"use client"
import Link from 'next/link'
import React from 'react'
import NavLink from './NavLink'
import { authClient } from '@/lib/auth-client'
import { Avatar } from '@heroui/react'

const Navbar = () => {
  const {data:session, isPending, error} = authClient.useSession();
  const user = session?.user;

    const links =<>
         <li><NavLink href={'/'}>Home</NavLink></li>
         <li><NavLink href={'/products'}>Products</NavLink></li>
         <li><NavLink href={'/profile'}>Profile</NavLink></li>
    </>
  return (
   <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link className='text-md font-semibold' href={'/'}><span className='text-orange-500 font-bold text-xl'>Sun</span ><span>Bliss Store</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  <div className="navbar-end">
     {
      !user && <Link href={'/signin'}><button className='btn bg-orange-500 text-white'>SignIn</button></Link>
     }
     {
      user && <div className='flex items-center gap-2'>
        <Avatar>
        <Avatar.Image 
        alt={user.name} 
        src={user.image} 
        referrerPolicy='no-referrer'
        />
        <Avatar.Fallback>{user.name[0]}</Avatar.Fallback>
      </Avatar>
        <button className='btn bg-orange-500 text-white' onClick={async()=>await authClient.signOut()}>SignOut</button>
      </div>
     }
  </div>
</div>
  )
}

export default Navbar
