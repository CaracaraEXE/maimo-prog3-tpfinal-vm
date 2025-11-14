'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const LugarContainer = ({id}) => {

  const {getOneLugar,lugar, loading, error, getBarrios, barrios} = useAppContext()
  const dias = ["L", "M", "X", "J", "V", "S", "D"];
  const semana = lugar.semana;
  const URL = lugar.howto;
  console.log(semana, URL);

  useEffect(() => {
    getOneLugar(id);
    getBarrios();
  },[])

  return (
    <>
    {!loading &&
    <div className='flex flex-col items-center justify-center align-center mx-auto w-fit lg:w-full lg:py-6'>
      <Link href={"/lugar"}>AFUERA</Link>
      <h1 className='text-center text-3xl lg:text-5xl'>{lugar.nombre}</h1>
      <Image
        src={'/assets/squareph.jpg'}
        alt='placeholder'
        height={100}
        width={200}
        className='rounded-2xl lg:w-full lg:h-100'/>
        <section>
        <h2 className='lg:text-4xl'>Información basica</h2>
        <table>
          <tbody>
            <tr>
              <td>Barrios</td>
              <td>{
                      //barrios.find(barr => barr._id === lugar.barrio[0]).name
                    }</td>
            </tr>
            <tr>
              <td>Dirección</td>
              <td>{lugar.direccion}</td>
            </tr>
          </tbody>
        </table>


        <h2 className='lg:text-4xl'>Consideraciones</h2>
        <table>
          <tbody>
                    <tr>
              <td>Entrada?</td>
              <td>{lugar.entrada}</td>
            </tr>
            <tr>
              <td>Acompañante?</td>
              <td>{lugar.acompa == false ? "No" : "Sí"}</td>
            </tr>
          </tbody>
        </table>
        
          <ul className='flex gap-2'>
            {dias.map((dia, i) =>
            <li key={dia} className={`semdia list-none p-1 px-2 border-white border-2 rounded-[0.5em] text-white bg-lime-700 ${semana[i] ? "" : "opacity-50 bg-red-900 text-black"}`}>
              {dia}    
            </li>
            )}
          </ul>


        <h2 className='lg:text-3xl'>Ubicación en el Mapa</h2>

        <h2 className='lg:text-3xl'>¿Como ir?</h2>
            <Link className='bg-gray-700 p-2 px-4 rounded-3xl w-fit m-auto my-4 text-[1em] lg:px-10 lg:text-2xl' href={lugar.howto}>Ver en Google Maps</Link>
        </section>
        </div>
    }

    {loading && error &&
    <p>Cargando...</p>}
    </>
)
}

export default LugarContainer