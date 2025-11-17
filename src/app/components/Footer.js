import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-800 flex flex-col items-center h-full w-full px-3 lg:px-10 py-4 lg:py-6 text-white'>
        <p className='leading-3 text-center mb-5 italic font-medium text-[0.5em] lg:text-[0.80em]'>Toda la información esta sujeta a cambios. Las actualizaciones pueden tardar en aparecer. Tenga paciencia.</p>

        <section className='flex flex-col lg:flex-row lg:justify-evenly lg:w-full'>
              <div className='flex flex-col items-center'>
                <p className='leading-3.5 mb-2 lg:mb-1'>Seguí el proyecto en:</p>
                <ul className='flex gap-2'>
                  <li><Image src={'assets/yt.svg'} alt='Youtube' height={10} width={30}/></li>
                  <li><Image src={'assets/fb.svg'} alt='Facebook' height={10} width={30}/></li>
                  <li><Image src={'assets/ig.svg'} alt='Instagram' height={10} width={30}/></li>
                </ul>
              </div>
              <div className='flex flex-col items-center'>
                <p className='leading-3.5 mt-2'>Mail para consultas:</p>
                <p className='leading-3.5 italic mt-1 font-bold'>vamosjuntos@gmail.com</p>
              </div>
        </section>

              <p className='leading-3.5 text-center mt-3 italic text-[0.80em]'>Victoria Mobilia - Año 2025</p>

    </footer>
  )
}

export default Footer