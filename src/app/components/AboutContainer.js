import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutContainer = () => {
  return (
    <div className=' py-6'>
      <div className='lg:w-full lg:h-60 bg-[url("/assets/anikobsas.jpg")] bg-cover bg-top'>
      </div>

    <section className='px-4 lg:px-10 lg:py-5'>
        <h1 className='text-[2.5em] text-center mb-5 leading-9 font-black text-green-800'>Sobre VJ</h1>
        <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em] mb-3'><span className='font-bold'>Vamos Juntos</span> es una base de datos hecha para ayudar a las personas con discapacidad -poseyentes de un Certificado Único de Discapacidad- a transitar por la Ciudad de Buenos Aires. Ofrecemos una lista de lugares accesibles al mostrarse el CUD, asi como eventos que admiten entrada.</p>
        <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em]'>Ademas, ofrecemos la información basica para comunicarse e ir a esos lugares de manera segura.</p>
    </section>


        <section className='px-4 lg:px-15  bg-green-800 text-white py-8 lg:p-6'>
           
           <Image
                src={'/assets/anikoobelisco.jpg'}
                alt={'header'}
                height={100}
                width={500}
                className='lg:w-[40%] mx-auto mb-5 my-5'
              />
           
            <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em]'>Las ilustraciones que decoran nuestra pagina son del artista <span className='font-bold'>Ániko Szabo</span>, del genero naif. Sus pinturas de los diversos paisajes de Buenos Aires y su estilo unico ha inspirado el estilo artistico de esta página. Si desean apoyar al artista, dejaremos sus redes abajo:</p>
            <ul className='flex flex-col lg:flex-row lg:justify-center gap-1 lg:gap-4 items-center py-2 font-semibold'>
                <li className=' text-[1.5em] lg:text-[1em]'><Link className='flex gap-1' href={'https://www.instagram.com/anikoszabonaif'}><Image src={'/assets/ig.svg'} width={20} height={20} alt={"IG icon"}/>Instagram</Link></li>
                <li className=' text-[1.5em] lg:text-[1em]'><Link className='flex gap-1' href={'https://www.anikoszabo.com.ar/'}><Image src={'/assets/basket.svg'} width={20} height={20} alt={"Store icon"}/>Tienda Online</Link></li>
                <li className=' text-[1.5em] lg:text-[1em]'><Link className='flex gap-1' href={'https://www.facebook.com/anikoszabo.pinturanaif'}><Image src={'/assets/fb.svg'} width={20} height={20} alt={"FB icon"}/>Facebook</Link></li>
            </ul>

            <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em]'><Link href={'https://fonts.google.com/specimen/Montserrat'} className='font-bold'>Montserrat,</Link> nuestra fuente principal, es una tipografía inspirada en el diseño grafico del barrio porteño del mismo nombre. Elegimos esta fuente no solo por su estetica, sino tamben por su gran diversidad de grosores, haciendo que sea mucho mas customizable al usar.</p>
        </section>
        <section className='px-4 lg:px-10 lg:py-5'>
          <h2 className='text-[1.75em] lg:text-3xl text-center mt-5 leading-8 mb-2 lg:mb-4 font-bold text-green-700'>Sobre la Autora</h2>
          <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em] mb-3'>¡Buenas! Me llamo <span className='font-semibold'>Victoria Mobilia</span>, o sino me gusta el nombre <span className='font-semibold'>Herbertia.</span> Soy una chica dentro del Espectro Autista, y fui diagnosticada ¡Hace mas de diez años! Cuando era muy chica no era mucho de salir, sea por miedo a la ciudad o aburrimiento, pero eso cambió despues de la pandemia del COVID. Buenos Aires tiene sus desperfectos, pero sin dudarlo es una ciudad magica. Belleza, historia y arte se esconden hasta en el más común de los barrios, y siempre hay algo para hacer sin importar el tiempo o la estación.</p>
          <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em] mb-3'>No obstante, ademas de estar dentro del TEA, también tengo sensibilidad a la luz y el sonido, asi como paralisis debido a condiciones de mi columna, por lo que mi transito en la Ciudad es muy diferente a la persona promedio. No obstante esto me inspiro a crear VJ, ya que incluso a pesar de nuestras complicaciones siempre hay lugares que nos aceptarán y nos guiarán en su recorrido.</p>

        <p className='text-center leading-8 lg:leading-5 text-[1.30em] lg:text-[1em] italic'>Vamos Juntos es una database muy temprana, y aun hay mucho que mejorar. En el futuro planeamos usar más integraciones, como un Calendario para los Eventos, una mejor guía para usar los transportes de Buenos Aires, e incorporación de localidades a los alrededores de Buenos Aires.</p>

        <h3 className='text-[1.75em] lg:text-[1.5em] font-semibold text-center mt-2 leading-8 italic mb-2 lg:mb-0 text-green-700'>¡Espero que esta página te ayude a viajar!</h3>
        <p className='text-center leading-8 text-[1.30em] lg:text-[1em] italic'>No tengas miedo de consultarnos y reportar cualquier error con la página.</p>
                </section>
    </div>
  )
}

export default AboutContainer