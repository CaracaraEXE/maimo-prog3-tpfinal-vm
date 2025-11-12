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
      
      {!nav ?
      <button onClick={() => {setNav(true)}}>Menu</button>
    :  
          <button onClick={() => {setNav(false)}}>Salir</button>

    }
      <span className='text-3xl'>VJ</span>
    </section>
    {nav &&
    <nav className='p-4 pl-8 list-none bg-gray-500'>
      <li className='mb-3 text-2xl'>Eventos</li>
      <li className='mb-3 text-2xl'>Lugares</li>
      <li className='mb-3 text-2xl'>Calendario</li>
      <li className='mb-3 text-2xl'>Sobre Nosotros</li>
      <li className='text-2xl'>¡NO A LOS CUD FALSOS!</li>
    </nav>
    }
    </div>
  )
}

export default NavBar