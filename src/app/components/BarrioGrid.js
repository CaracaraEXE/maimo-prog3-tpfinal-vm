'use client'

import { useAppContext } from '@/context/AppContext'
import React, { useEffect } from 'react'

const BarrioGrid = () => {
    const {barrios,getBarrios} = useAppContext();

    useEffect(() => {
        getBarrios();
    },[]);

  return (
    <div>
        {barrios.map(barrio =>
            <div key={barrio._id}>
                {barrio.name}
            </div>
        )}
    </div>
  )
}

export default BarrioGrid