'use client'

import React, { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'

const EventGrid = () => {

    const {getEventos,eventos} = useAppContext();

    useEffect(() => {
        getEventos();
    },[]);

  return (
    <div>
        {eventos.map(evento => 
            <div key={evento._id}>{evento.nombre}</div>
        )}
    </div>
  )
}

export default EventGrid