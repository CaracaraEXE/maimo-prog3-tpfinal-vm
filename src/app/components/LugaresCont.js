'use client'
import React from 'react'
import { useEffect } from 'react'
import { useAppContext } from '@/context/AppContext'

const LugaresCont = () => {

    const {lugares, getLugares} = useAppContext();

  return (
    <div>LugaresCont</div>
  )
}

export default LugaresCont