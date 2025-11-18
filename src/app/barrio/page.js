'use client'

import { useAppContext } from '@/context/AppContext'
import React from 'react'
import Dropdown from '../components/Dropdown';

const barrioPage = () => {

  return (
    <>
    <h1 className='text-[2.5em] text-center mb-5 leading-9 font-black text-green-800 mt-4'>Buscá por Barrio</h1>
    <Dropdown/>
    </>
  )
}

export default barrioPage