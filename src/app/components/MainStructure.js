import { useAppContext } from '@/context/AppContext'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MainStructure = ({array}) => {

      const {getOneLugar,lugar, loading, error, getBarrios, barrios} = useAppContext()
      const dias = ["L", "M", "X", "J", "V", "S", "D"];


  return (
       <>
    {!loading &&
    <div className='lg:w-full lg:py-6 bg-white'>
      <p className='text-[1em] ml-2 mb-2 font-medium'><Link href={`/${array.fecha ? "evento" : "lugar"}`} className='text-green-800 hover:text-purple-950 transition'>{`${array.fecha ? "Eventos" : "Lugares"}`} </Link> 
      &#5171;
      <span className='ml-2'>
       <Link href={`/barrio/${array.barrio}`} className='text-emerald-800 hover:text-purple-900'>
       {array.barrio &&
                  array.barrio.map((_id) => {
                    const match = barrios.find(
                      (barr) => barr._id === _id
                    );
                    return match ? match.name : null;
                  })} </Link>
      </span>
      </p>

      <h1 className='text-center text-3xl lg:text-5xl bg-emerald-800 py-4 font-black text-white'>{array.nombre}</h1>
      <div className=' overflow-hidden'>
      <Image
        src={`/assets/db/${array.img}`}
        alt='placeholder'
        height={100}
        width={500}
        className='object-cover w-full lg:h-80 min-h-50'/>
      </div>
        <section className='lg:flex lg:justify-conter'>
          <div className='lg:w-full lg:border-r-2 lg:border-green-950'>
        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-2 font-medium text-white'>Información basica</h2>
        <table className='text-black w-full mx-auto'>
          <tbody>
            <tr>
              <td className='p-4 text-2xl lg:text-xl font-bold'>Tematica</td>
              <td className='p-4 text-2xl lg:text-xl w-full text-end'>{array.tematica}</td>
            </tr>
            <tr>
              <td className='p-4 text-2xl lg:text-xl font-bold'>Dirección</td>
              <td className='p-4 text-2xl lg:text-xl w-full text-end'>{array.direccion}</td>
            </tr>
          </tbody>
        </table>
        </div>

        <div className='lg:w-full lg:border-r-2 lg:border-green-950'>
        <h2 className='lg:text-xl text-3xl text-center bg-green-800 py-2 font-medium text-white'>Consideraciones</h2>
        <table className='text-black mx-auto w-full'>
          <tbody>
                    <tr>
              <td className='p-4 text-2xl lg:text-xl font-bold'>Entrada?</td>
              <td className='p-4 text-2xl lg:text-xl w-full text-end font-semibold'>{array.entrada}</td>
            </tr>
            <tr>
              <td className='p-4 text-2xl font-bold lg:text-xl '>Acompañante?</td>
              <td className='p-4 text-2xl lg:text-xl text-end'>{array.acompa == false ? "No" : "Sí"}</td>
            </tr>
          </tbody>
        </table>
        </div>
        
        <div className='lg:w-full'>
        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-2 font-medium text-white'>Horarios</h2>
          
            { array?.semana?
            <ul className='flex gap-2 w-fit mx-auto my-3'>
            {dias.map((dia, i) =>
            <li key={dia} className={`semdia list-none p-1 px-2 border-green-800 font-semibold border-2 rounded-[0.5em] text-white bg-lime-700 ${array.semana[i] ? "" : "opacity-50 bg-red-900 border-red-800 text-black"}`}>
              {dia}    
            </li>
            )}
               </ul>
            :
            array?.fecha?
            <p className='text-center mx-auto text-2xl my-4 lg:text-xl'>Fecha: <span className='font-bold'>{array.fecha}</span></p>
            :
            "Cargando..."
            
            }

          
          <section className='text-center text-2xl mb-3 lg:text-xl'>
           
           <ul className='flex align-items flex-col'>
            {array.horarios ?
            typeof array.horarios === "object" ?
            array.horarios.map(horario =>

              <li key={horario} className='lg:text-[0.90em] lg:mb-1 m-auto flex justify-start gap-2 w-fit'><Image src={'/assets/alarm.svg'} width={25} height={25} alt={"Clock icon"}/>  {horario}</li>
            )
            :
            <li  className='lg:text-[0.90em] lg:mb-1 m-auto gap-2 flex w-fit'><Image src={'/assets/alarm.svg'} width={30} height={30} alt={"Clock icon"}/> {array.horarios}</li>
        :
        "Cargando"  
        }
        </ul>
        </section>
          </div>

                    </section>


        <section className='bg-emerald-100'>
        <h2 className='lg:text-xl text-center text-3xl bg-green-800 py-1 font-medium text-white'>Ubicación en el Mapa</h2>
        {array.src ? <iframe src={array.src} className="border-0 mx-auto w-full lg:w-[50%] lg:h-60 py-4" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> : "NO DATA"}
        </section>

        <h2 className='lg:text-4xl text-center text-3xl bg-green-800 py-1 mb-5 font-medium text-white'>¿Cómo ir?</h2>
            {array.howto ? <Link className='flex gap-3 bg-emerald-800 p-2 px-4 rounded-3xl w-fit m-auto text-[1.5em] lg:px-8 lg:text-2xl mb-5 text-white shadow-green-950 shadow-2xs cursor-pointer hover:bg-purple-950 hover:font-semibold transition' href={array.howto}> <Image src={'/assets/map1.svg'} width={30} height={30} alt={"Map icon"}/> Ver en Google Maps</Link> : "Cargando..."}
        </div>
    }

    {loading && error &&
    <p>Cargando...</p>}
    </>
)
}

export default MainStructure