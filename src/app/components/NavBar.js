'use client'

import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div>
        <section>
            <p className='bg-red-800 text-white text-[0.75em] p-2'><span className='font-bold'>¡NO A LOS CUD FALSOS!</span> <Link href={"/alerta"} className='underline'>Lee nuestra declaración completa</Link></p>
        </section>
    <section className='bg-gray-600 p-2 flex justify-between px-4'>
      <button onClick={() => {!nav ? setNav(true) : setNav(false)}}>Menu</button>
      <span className='text-3xl'>VJ</span>
    </section>
    {nav &&
    <nav className='p-4 list-none bg-gray-500'>
      <li className='mb-2 text-2xl'>Test</li>
       <li className='mb-2 text-2xl'>Test</li>
       <li className='mb-2 text-2xl'>Test</li>
        <li className='text-2xl'>Test</li>
        
    </nav>
    }
    </div>
  )
}

export default NavBar