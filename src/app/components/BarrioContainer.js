'use client'

import { useAppContext } from '@/context/AppContext';
import React, { useEffect } from 'react'
import Dropdown from './Dropdown';
import MainGrid from './MainGrid';

const BarrioContainer = ({id}) => {

       const {barrios, getBarrioEventos, getBarrioLugares, BE, BL, loading} = useAppContext();

    useEffect(() => {
        getBarrioEventos(id);
        getBarrioLugares(id);
    },[]);

    BE && BL ?
  console.log(BE, BL)
  :
  console.log("Jaja no cargaron");

  const esteBarrio = barrios ? barrios.find(barr => barr._id === id)?.name : "ERROR";

  return (
    <div>
        <Dropdown/>
        {!loading &&
        <section className='mb-10'>
        <h1 className='text-center text-3xl lg:text-4xl bg-emerald-800 py-4 font-black text-white'>Barrios en Detalle: {esteBarrio}</h1>
        <h2 className='text-[1.75em] lg:text-3xl text-center mt-5 leading-8 mb-2  font-bold text-green-700'>Lugares en {esteBarrio}</h2>
        {BL?
        BL.length?
            <MainGrid array={BL}/>
            :
            <p className='text-center leading-8 text-[1.30em] lg:text-[1em] italic'>No se encontró ningún lugar.</p>
        :
        "Cargando"

        }

        <h2 className='text-[1.75em] lg:text-3xl text-center mt-5 leading-8 mb-2 lg:mb-4 font-bold text-green-700'>Eventos en {esteBarrio}</h2>
        {BE?
        BE.length?
             <MainGrid array={BE}/>
            :
             <p className='text-center leading-8 text-[1.30em] lg:text-[1em] italic'>No se encontró ningún evento.</p>
        :
        "Cargando"

        }
        </section>
        }

    </div>
  )
}

export default BarrioContainer