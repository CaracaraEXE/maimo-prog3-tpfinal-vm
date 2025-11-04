'use client'

import React, { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'

const PlaceGrid = () => {

    const {lugares, getLugares} = useAppContext();

    useEffect(() =>{
        getLugares();
    },[])

    console.log(lugares);

  return (
    <section>
        {lugares.map(lugar => 
            <div key={lugar._id}>{lugar.nombre}</div>
        )}
    </section>
  )
}

export default PlaceGrid