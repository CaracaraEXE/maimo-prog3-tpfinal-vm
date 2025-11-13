'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const HomeContainer = () => {



  return (
    <div className='flex flex-col justify-center'>
    <section className='static'>
      <Image
        src={'/assets/deer.png'}
        alt={'header'}
        height={100}
        width={500}
        className='lg:w-full lg:h-80'
      />
    </section>

    <p className='px-2 text-center py-5'>Creado por y para personas con discapacidades.</p>
    
    <section className='flex flex-col h-60 lg:h-50 lg:flex-row'>
      <button className='bg-orange-700 h-full w-full text-2xl flex flex-col items-center justify-center'>
         <Image
        src={'/assets/map.svg'}
        alt={'header'}
        height={20}
        width={80}
        className=''
      />
      Lugares
      </button>
      <button className='bg-teal-700 h-full w-full text-2xl flex flex-col items-center justify-center'>
         <Image
        src={'/assets/calendar.svg'}
        alt={'header'}
        height={20}
        width={80}
        className=''
      />
        Eventos
        </button>
    </section>

    <p className='text-center mt-5'>VER POR MAPA:</p>


    <button className='bg-gray-700 p-2 px-4 rounded-3xl w-fit m-auto my-4 text-[1.25em] lg:px-10 lg:text-2xl'>O sino buscá por Barrio! </button>
    
    </div>
  )
}

export default HomeContainer