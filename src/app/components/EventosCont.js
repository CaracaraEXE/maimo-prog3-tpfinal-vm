'use client'

import React, { useEffect } from 'react'
import MainGrid from './MainGrid'
import { useAppContext } from '@/context/AppContext'

const EventosCont = () => {

    const {getEventos,eventos} = useAppContext();
    
    useEffect(() => {
        getEventos();
    },[]);

  return (
    <>
    <h1 className='text-center text-4xl text-green-700 font-extrabold'>Eventos</h1>
        <MainGrid array={eventos}/>
    </>
  )
}

export default EventosCont