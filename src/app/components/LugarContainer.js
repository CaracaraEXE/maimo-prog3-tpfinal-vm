'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const LugarContainer = ({id}) => {

  const {getOneLugar,lugar, loading, error, getBarrios, barrios} = useAppContext()
  const dias = ["L", "M", "X", "J", "V", "S", "D"];

  useEffect(() => {
    getOneLugar(id);
    getBarrios();
  },[])

  console.log(lugar);
            console.log(lugar.horarios)


  return (
    <>
    {!loading &&
    <div className='lg:w-full lg:py-6 bg-white'>
      <p className='text-[1em] ml-2 mb-2 font-medium'><Link href={"/lugar"} className='text-green-800'>Lugares </Link> 
      &#5171;
      <span className='ml-2'>
       {lugar.barrio &&
                  lugar.barrio.map((_id) => {
                    const match = barrios.find(
                      (barr) => barr._id === _id
                    );
                    return match ? match.name : null;
                  })} 
      </span>
      </p>

      <h1 className='text-center text-3xl lg:text-5xl bg-green-800 py-4 font-black text-white'>{lugar.nombre}</h1>
      <Image
        src={'/assets/squareph.jpg'}
        alt='placeholder'
        height={100}
        width={200}
        className='w-full lg:h-100'/>
        <section className='lg:flex lg:justify-conter'>
          <div className='lg:w-full'>
        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-2 font-medium text-white'>Información basica</h2>
        <table className='text-black w-full mx-auto'>
          <tbody>
            <tr>
              <td className='p-4 text-2xl font-bold lg:text-xl'>Barrio</td>
              <td className='p-4 text-black text-2xl lg:text-xl text-end'>
                {lugar.barrio &&
                  lugar.barrio.map((_id) => {
                    const match = barrios.find(
                      (barr) => barr._id === _id
                    );
                    return match ? match.name : null;
                  })}
              </td>
            </tr>
            <tr>
              <td className='p-4 text-2xl lg:text-xl font-bold'>Dirección</td>
              <td className='p-4 text-2xl lg:text-xl w-full text-end'>{lugar.direccion}</td>
            </tr>
          </tbody>
        </table>
        </div>

        <div className='lg:w-full'>
        <h2 className='lg:text-xl text-3xl text-center bg-green-800 py-2 font-medium text-white'>Consideraciones</h2>
        <table className='text-black mx-auto w-full'>
          <tbody>
                    <tr>
              <td className='p-4 text-2xl lg:text-xl font-bold '>Entrada?</td>
              <td className='p-4 text-2xl lg:text-xl w-full text-end'>{lugar.entrada}</td>
            </tr>
            <tr>
              <td className='p-4 text-2xl font-bold lg:text-xl '>Acompañante?</td>
              <td className='p-4 text-2xl lg:text-xl text-end'>{lugar.acompa == false ? "No" : "Sí"}</td>
            </tr>
          </tbody>
        </table>
        </div>
        
        <div className='lg:w-full'>
        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-2 font-medium text-white'>Horarios</h2>
          <ul className='flex gap-2 w-fit mx-auto my-3'>
            { lugar?.semana?
            dias.map((dia, i) =>
            <li key={dia} className={`semdia list-none p-1 px-2 border-white border-2 rounded-[0.5em] text-white bg-lime-700 ${lugar.semana[i] ? "" : "opacity-50 bg-red-900 text-black"}`}>
              {dia}    
            </li>
            )
            :
            "Cargando..."
            }
          </ul>
          <p className='text-center text-2xl mb-3'>{lugar.horarios ?
            typeof lugar.horarios === "object" ?
            lugar.horarios.map(horario =>
              <p key={horario}>{horario}</p>
            )
            :
            lugar.horarios
        :
        "Cargando"  
        }</p>
          </div>

                    </section>


        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-1 font-medium text-white'>Ubicación en el Mapa</h2>

        {lugar.src ? <iframe src={lugar.src} className="border-0 mx-auto w-full lg:w-[50%] lg:h-60 my-4" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : "NO DATA"}

        <h2 className='lg:text-4xl text-center text-3xl bg-green-800 py-1 mb-5 font-medium text-white'>¿Cómo ir?</h2>
            {lugar.howto ? <Link className='bg-purple-900 p-2 px-4 rounded-3xl w-fit m-auto text-[1.5em] lg:px-10 lg:text-2xl mb-5 block text-white shadow-green-950 shadow-2xs cursor-pointer' href={lugar.howto}>Ver en Google Maps</Link> : "Cargando..."}
        </div>
    }

    {loading && error &&
    <p>Cargando...</p>}
    </>
)
}

export default LugarContainer