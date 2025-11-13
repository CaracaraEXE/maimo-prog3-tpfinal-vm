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
    <MainGrid array={eventos}/>
  )
}

export default EventosCont