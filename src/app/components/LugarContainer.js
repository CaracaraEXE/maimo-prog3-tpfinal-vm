'use client'

import { useAppContext } from '@/context/AppContext'
import Link from 'next/link'
import React, { useEffect } from 'react'

const LugarContainer = ({id}) => {

  const {getOneLugar,lugar, loading, error} = useAppContext()

  useEffect(() => {
    getOneLugar(id);
  },[])

  return (
    <>
    {!loading &&
    <>
    <Link href={"/"}>AFUERA</Link>
    <h1>Hola soy {lugar.nombre}</h1>
    </>
    }

    {loading && error &&
    <p>Cargando...</p>}
    </>
)
}

export default LugarContainer