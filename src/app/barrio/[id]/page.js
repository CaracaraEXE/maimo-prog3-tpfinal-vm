import BarrioContainer from '@/app/components/BarrioContainer';
import React from 'react'

const barrioMainPage = async ({params}) => {
    const {id} = await params;
    
  return (
    <BarrioContainer id={id}/>
)
}

export default barrioMainPage