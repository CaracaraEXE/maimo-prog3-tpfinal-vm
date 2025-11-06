'use client'

import React, { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'
import Link from 'next/link';

const PlaceGrid = () => {

    const {lugares, getLugares} = useAppContext();

    useEffect(() =>{
        getLugares();
    },[])

  return (
    <section>
        {lugares.map(lugar => 
            <div key={lugar._id}>{lugar.nombre}
            <Link href={`/lugar/${lugar._id}`}>Mira...</Link>
            </div>
        )}
    </section>
  )
}

export default PlaceGrid