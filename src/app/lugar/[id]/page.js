import LugarContainer from '@/app/components/LugarContainer'
import React from 'react'

const lugarPage = async ({params}) => {
    const {id} = await params;
    
  return (
    <LugarContainer id={id}/>
  )
}

export default lugarPage