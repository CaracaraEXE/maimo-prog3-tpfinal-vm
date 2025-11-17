'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Footer from './Footer'
import Link from 'next/link'

const HomeContainer = () => {



  return (
    <div className='flex flex-col justify-center'>
      
    <section className='bg-[url("/assets/deer.png")] bg-cover bg-center h-120 lg:h-80 flex flex-col items-center justify-center px-10'>
      <h1 className='text-5xl text-center font-bold text-white'><span className='text-lime-700'>Vamos Juntos</span>, que afuera está hermoso.</h1>
          <p className='px-2 text-center py-5 font-bold italic'>Guía de viaje por y para personas con discapacidad.</p>
    </section>

    <p className='text-center font-medium italic py-5'>Ultima actualización: <span className='text-green-700 my-10'>16/11/25</span></p>
    
    <section className='flex flex-col lg:h-50 lg:flex-row'>
      <Link className='bg-purple-900 h-full w-full text-3xl flex flex-col items-center justify-center py-10 font-bold text-white' href={'/lugar'}>
         <Image
        src={'/assets/map.svg'}
        alt={'header'}
        height={20}
        width={80}
      />
      Lugares
      </Link>
      <Link className='bg-green-600 h-full w-full text-3xl flex flex-col items-center justify-center py-10 font-bold text-white' href={'/evento'}> 
         <Image
        src={'/assets/calendar.svg'}
        alt={'header'}
        height={20}
        width={80}
      />
        Eventos
        </Link>
    </section>

    <h2 className='lg:text-4xl text-3xl text-center bg-green-800 py-2 font-semibold text-white'>VER POR MAPA:</h2>


    <button className='bg-emerald-800 p-2 px-4 rounded-3xl w-fit m-auto my-4 text-[1.5em] lg:px-10 lg:text-2xl text-white shadow-green-950 shadow-2xs'>O sino buscá por Barrio! </button>
    
    </div>
  )
}

export default HomeContainer