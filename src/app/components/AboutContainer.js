import Image from 'next/image'
import React from 'react'


const AboutContainer = () => {
  return (
    <div className=' py-6'>
              <Image
                src={'/assets/deer.png'}
                alt={'header'}
                height={100}
                width={500}
                className='lg:w-full lg:h-80 mb-5'
              />

    <section className='px-4'>
        <h1 className='text-[2.5em] text-center mb-4 leading-9'>Sobre Nosotros</h1>
        <p className='text-center leading-8 text-[1.30em] mb-4'><span className='font-bold'>Vamos Juntos</span> es una base de datos hecha para ayudar a las personas con discapacidad -poseyentes de un Certificado Único de Discapacidad- a transitar por la Ciudad de Buenos Aires. Ofrecemos una lista de lugares accesibles al mostrarse el CUD, asi como eventos que admiten entrada.</p>
        <p className='text-center leading-8 text-[1.30em]'>Ademas, ofrecemos la información basica para comunicarse e ir a esos lugares de manera segura.</p>
    </section>

      <Image
                src={'/assets/deer.png'}
                alt={'header'}
                height={100}
                width={500}
                className='lg:w-full lg:h-80 mb-5 my-5'
              />

        <section className='px-4'>
            <p className='text-center leading-8 text-[1.30em]'>Las ilustraciones que decoran nuestra pagina son del artista Ániko Szabo, del genero naif. Sus pinturas de los diversos paisajes de Buenos Aires y su estilo unico ha inspirado el estilo artistico de esta página. Si desean apoyar al artista, dejaremos sus redes abajo:</p>
            <ul className='flex flex-col gap-1 items-center py-2'>
                <li className='flex gap-1 text-[1.5em]'><Image src={'/assets/ig.svg'} width={20} height={20} alt={"IG icon"}/>Instagram</li>
                <li className='flex gap-1 text-[1.5em]'>Tienda Online</li>
            </ul>

        <p className='text-center leading-8 text-[1.30em]'>Vamos Juntos es una database muy temprana, y aun hay mucho que mejorar. En el futuro planeamos usar más integraciones, como un Calendario para los Eventos, una mejor guía para usar los transportes de Buenos Aires, e incorporación de localidades a los alrededores de Buenos Aires.</p>

        <h3 className='text-[1.75em] text-center mt-2 leading-8 italic mb-2'>¡Espero que esta página te ayude a viajar!</h3>
        <p className='text-center leading-8 text-[1.30em] italic'>No tengas miedo de consultarnos y reportar cualquier error con la página.</p>
                </section>
    </div>
  )
}

export default AboutContainer