'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const HomeContainer = () => {



  return (
    <div className='flex flex-col justify-center'>
      
    <section className='bg-[url("/assets/deer.png")] bg-cover bg-center h-120 flex flex-col items-center justify-center px-10 mb-10'>
      <h1 className='text-5xl text-center'><span className='font-bold'>Vamos Juntos</span>, que afuera está hermoso.</h1>
          <p className='px-2 text-center py-5'>Guía de viaje por y para personas con discapacidad.</p>
    </section>
    
    <section className='flex flex-col lg:h-50 lg:flex-row'>
      <button className='bg-orange-700 h-full w-full text-3xl flex flex-col items-center justify-center py-10'>
         <Image
        src={'/assets/map.svg'}
        alt={'header'}
        height={20}
        width={80}
        className=''
      />
      Lugares
      </button>
      <button className='bg-teal-700 h-full w-full text-3xl flex flex-col items-center justify-center py-10'>
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


    <button className='bg-gray-700 p-2 px-4 rounded-3xl w-fit m-auto my-4 text-[1.5em] lg:px-10 lg:text-2xl'>O sino buscá por Barrio! </button>
    
    </div>
  )
}

export default HomeContainer