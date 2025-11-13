import Image from 'next/image'
import React from 'react'


const Footer = () => {
  return (
    <footer className='bg-green-800 flex flex-col items-center h-full w-full px-3 py-4'>
        <p className='leading-3.5 text-center mb-5 italic'>Toda la información esta sujeta a cambios. Las actualizaciones pueden tardar en aparecer. Tenga paciencia.</p>

        <section className='flex'>
            <nav className='list-none'>
                <li className='mt-[-0.25em] font-bold'>Sobre Nosotros</li>
                <li className='mt-[-0.25em] font-bold'>Lugares</li>
                <li className='mt-[-0.25em] font-bold'>Eventos</li>
                <li className='mt-[-0.25em] font-bold'>Mapa</li>
                <li className='mt-[-0.25em] font-bold'>Calendario</li>
                <li className='mt-[-0.10em] leading-4 font-bold'>¡NO A LOS CUDS FALSOS!</li>
            </nav>
            <div className='flex flex-col items-end'>
                <p className='leading-3.5'>Seguí el proyecto en:</p>
                <ul className='flex gap-2'>
                  <li><Image src={'assets/yt.svg'} alt='Youtube' height={10} width={30}/></li>
                  <li><Image src={'assets/fb.svg'} alt='Facebook' height={10} width={30}/></li>
                  <li><Image src={'assets/ig.svg'} alt='Instagram' height={10} width={30}/></li>
                </ul>
                <p className='leading-3.5 mt-4'>Mail para consultas:</p>
                <p className='leading-3.5 italic mt-1'>vamosjuntos@gmail.com</p>
            </div>
        </section>

              <p className='leading-3.5 text-center mt-3 italic text-[0.80em]'>Victoria Mobilia - Año 2025</p>

    </footer>
  )
}

export default Footer