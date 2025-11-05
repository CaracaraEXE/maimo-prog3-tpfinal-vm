import React from 'react'
import PlaceGrid from './PlaceGrid'
import EventGrid from './EventGrid'
import BarrioGrid from './BarrioGrid'

const HomeContainer = () => {
  return (
    <>
    <h1>LUGARES!</h1>
    <PlaceGrid/>
    <h1>EVENTOS!</h1>
    <EventGrid/>
    <h1>BARRIO</h1>
    <BarrioGrid/>
    </>
  )
}

export default HomeContainer