import React, { useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';

const MainGrid = ({array}) => {

  const {barrios, getBarrios} = useAppContext();

   useEffect(() => {
          getBarrios();
      },[]);

      console.log(array);
  

  return (
    <section className='px-5 lg:p-5 lg:flex lg:flex-wrap'>
        {array.map(item => 
            <article key={item._id} className='flex bg-emerald-800 m-auto p-2 lg:p-8 my-5 lg:my-3 rounded-2xl  lg:max-w-130 lg:min-w-130 lg:max-h-100 h-fit shadow-md/50 shadow-blue-950 text-white'>
              <Image
              src={`/assets/db/${item.img}`}
              alt='placeholder'
              height={100}
              width={100}
              className=' object-cover h-25 lg:min-h-40 lg:min-w-40 rounded-2xl'/>
              <section className='ml-3 py-1 flex flex-col justify-between'>
                <div>
                  <h2 className='text-[1.20em] min-w-30 lg:max-w-100 leading-5 lg:leading-7 font-semibold line-clamp-2 lg:text-[1.5em]'>{item.nombre}</h2>
                  <p className='text-[0.80em] lg:text-[0.95em] italic leading-3.5 mt-1'>{item.direccion} - <span>
                    {
                      barrios.find(barr => barr._id === item.barrio[0]).name
                    }
                    </span></p>
                  <p className='text-[0.85em]'>Entrada: <span className='font-bold'>{item.entrada}</span></p>
                    {item.fecha ? <p className='text-[0.85em]'>Fecha: <span className='font-bold'>{item.fecha}</span></p> : ""}
                </div>
                <Link href={`/${item.fecha ? "evento" : "lugar"}/${item._id}`} className='font-bold w-fit p-1 px-2 rounded-2xl bg-white text-emerald-700 hover:text-purple-900 transition-all'>Mas Información</Link>
              </section>
            </article>
        )}
    </section>
  )
}

export default MainGrid