'use client'

import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import MainStructure from './MainContainer'

const LugarContainer = ({id}) => {

  const {getOneLugar,lugar, loading, error, getBarrios, barrios} = useAppContext()

  useEffect(() => {
    getOneLugar(id);
    getBarrios();
  },[])



  return (
    <MainStructure array={lugar}/>
)
}

export default LugarContainer