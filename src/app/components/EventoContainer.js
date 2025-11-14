'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'

const EventoContainer = ({id}) => {

    const {evento, getOneEvento} = useAppContext();

    useEffect(() => {
        getOneEvento(id);
    },[]);

  return (
    <div></div>
)
}

export default EventoContainer