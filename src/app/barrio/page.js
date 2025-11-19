'use client'

import { useAppContext } from '@/context/AppContext'
import React from 'react'
import Dropdown from '../components/Dropdown';

const barrioPage = () => {

  return (
    <div className='py-5 min-h-lvh flex flex-col justify-center'>
    <h1 className='text-[2em] lg:text-[2.5em] text-center leading-9 font-black text-green-800 mt-4'>Buscá por Barrio</h1>
    <Dropdown/>
    </div>
  )
}

export default barrioPage