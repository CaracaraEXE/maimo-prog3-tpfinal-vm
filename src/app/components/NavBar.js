'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const NavBar = () => {

  const [nav, setNav] = useState(false);

  return (
    <div>
        <section>
            <p className='bg-red-800 text-white text-[0.75em] p-2 text-center lg:text-[1em]'><span className='font-bold'>¡NO A LOS CUD FALSOS!</span> <Link href={"/alerta"} className='underline'>Lee nuestra declaración completa</Link></p>
        </section>
    <section className='bg-gray-600 p-2 flex justify-between px-4 lg:px-2'>
      
      {!nav ?
      <button onClick={() => {setNav(true)}}>
        <Image
          src={'/assets/menu-hamburger-1.svg'}
          alt='Open menu'
          height={40}
          width={40}
        />
      </button>
    :  
          <button onClick={() => {setNav(false)}}>
            <Image
          src={'/assets/xmark.svg'}
          alt='X Mark'
          height={40}
          width={40}
        />
          </button>

    }
      <span className='text-3xl'>VJ</span>
    </section>
    {nav &&
    <nav className='p-4 pl-8 list-none bg-gray-500'>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition'>Eventos</li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition'>Lugares</li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition'>Calendario</li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition'>Sobre Nosotros</li>
      <li className='text-2xl lg:text-[1em] hover:font-bold transition'>¡NO A LOS CUD FALSOS!</li>
    </nav>
    }
    </div>
  )
}

export default NavBar