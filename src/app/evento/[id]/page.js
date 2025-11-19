import EventoContainer from '@/app/components/EventoContainer';
import React from 'react'

const eventoPage = async({params}) => {
      const {id} = await params;

  return (
    <EventoContainer id={id}/>
  )
}

export default eventoPage