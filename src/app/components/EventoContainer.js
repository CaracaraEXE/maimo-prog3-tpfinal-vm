'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import MainStructure from './MainStructure'

const EventoContainer = ({id}) => {

    const {evento, getOneEvento, loading, error,  barrios} = useAppContext();

     useEffect(() => {
        getOneEvento(id);
      },[])  

  return (
   <MainStructure array={evento}/>
)
}

export default EventoContainer