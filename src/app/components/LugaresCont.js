'use client'

import React, { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'
import MainGrid from './MainGrid';

const LugaresCont = () => {
  const {lugares, getLugares} = useAppContext();

    useEffect(() =>{
        getLugares();
    },[])

  return (
    <div>
        <h1 className='text-center text-4xl text-green-700'>Lugares</h1>
        <MainGrid array={lugares}/>
    </div>
  )
}

export default LugaresCont