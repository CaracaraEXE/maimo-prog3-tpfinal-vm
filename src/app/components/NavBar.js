'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const NavBar = () => {

  const {nav,setNav} = useAppContext();

  return (
    <div>
        <section>
            <p className='bg-red-800 text-white text-[0.75em] p-2 text-center lg:text-[1em]'><span className='font-bold'>¡NO A LOS CUD FALSOS!</span> <Link href={"/alerta"} className='underline'>Lee nuestra declaración completa</Link></p>
        </section>
    <section className='bg-white p-2 flex justify-between px-4 lg:px-2'>
      
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
      <Link href={'/'}><span className='text-3xl text-green-800'>VJ</span></Link>
    </section>
    {nav &&
    <nav className='p-4 pl-8 list-none bg-green-900'>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition font-bold'><Link href={'/evento'}>Eventos</Link></li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition font-bold'><Link href={'/lugar'}>Lugares</Link></li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition font-bold'>Calendario</li>
      <li className='mb-3 lg:mb-2 text-2xl lg:text-[1em] hover:font-bold transition font-bold'><Link href={'/nosotros'}>Sobre Nosotros</Link></li>
      <li className='text-2xl lg:text-[1em] hover:font-bold transition font-bold'><Link href={'/alerta'}>¡NO A LOS CUD FALSOS!</Link></li>
    </nav>
    }
    </div>
  )
}

export default NavBar