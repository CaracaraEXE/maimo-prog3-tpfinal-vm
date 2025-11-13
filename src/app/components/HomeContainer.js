import React from 'react'
import Image from 'next/image'
import Footer from './Footer'

const HomeContainer = () => {
  return (
    <>
    <section className='static'>
      <Image
        src={'/assets/deer.png'}
        alt={'header'}
        height={100}
        width={500}
      />
    </section>

    <p className='px-2 text-center'>Creado por y para personas con discapacidades.</p>
    
    <section className='flex flex-col h-60 lg:flex-row'>
      <button className='bg-orange-700 h-full w-full text-2xl'>LUGARES</button>
      <button className='bg-teal-700 h-full w-full text-2xl'>Eventos</button>
    </section>

    <button className='bg-gray-700 p-2 px-4 rounded-3xl'>O sino buscá por Barrio! </button>
    
    </>
  )
}

export default HomeContainer