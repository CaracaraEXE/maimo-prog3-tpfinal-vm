'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const EventoContainer = ({id}) => {

    const {evento, getOneEvento, loading, error,  barrios} = useAppContext();

     useEffect(() => {
        getOneEvento(id);
      },[])  

  return (
     <>
    {!loading &&
    <div className='flex flex-col items-center justify-center align-center mx-auto w-fit lg:w-full lg:py-6'>
      <Link href='/evento'>AFUERA</Link>
      <h1 className='text-center text-3xl lg:text-5xl'>{evento.nombre}</h1>
      <Image
        src={'/assets/squareph.jpg'}
        alt='Placeholder'
        height={100}
        width={200}
        className='rounded-2xl lg:w-full lg:h-100'
      />
      <section>
        <h2>Informacion Basica</h2>
         <table>
          <tbody>
            <tr>
              <td>Barrios</td>
              <td>{evento?.barrio && barrios
                  ? barrios.find(barr => barr._id === evento.barrio)?.name
                  : "Cargando..."}</td>
            </tr>
            <tr>
              <td>Dirección</td>
              <td>{evento.direccion}</td>
            </tr>
          </tbody>
        </table>


        <h2 className='lg:text-4xl'>Consideraciones</h2>
        <table>
          <tbody>
                    <tr>
              <td>Entrada?</td>
              <td>{evento.entrada}</td>
            </tr>
            <tr>
              <td>Acompañante?</td>
              <td>{evento.acompa == false ? "No" : "Sí"}</td>
            </tr>
          </tbody>
        </table>


        <h2 className='lg:text-3xl'>Ubicación en el Mapa</h2>
        {evento.src ? <iframe src={evento.src} className="border-0 my-2" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : "NO DATA"}

        <h2 className='lg:text-3xl'>¿Como ir?</h2>
            {evento.howto ? <Link className='bg-gray-700 p-2 px-4 rounded-3xl w-fit m-auto my-4 text-[1em] lg:px-10 lg:text-2xl' href={evento.howto}>Ver en Google Maps</Link> : "Cargando..."}
      </section>
    </div>
    }

    {loading && error &&
    <p>Cargando...</p>}
    </>
)
}

export default EventoContainer