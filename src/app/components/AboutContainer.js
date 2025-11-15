import Image from 'next/image'
import React from 'react'


const AboutContainer = () => {
  return (
    <div className='px-4 py-6'>
        <section className='static'>
              <Image
                src={'/assets/deer.png'}
                alt={'header'}
                height={100}
                width={500}
                className='lg:w-full lg:h-80 mb-5'
              />
        </section>

        <h1 className='text-[2.5em] text-center mb-4 leading-9'>Sobre Nosotros</h1>
        <p className='text-center leading-7 text-2xl mb-4'><span className='font-bold'>Vamos Juntos</span> es una base de datos hecha para ayudar a las personas con discapacidad -poseyentes de un Certificado Único de Discapacidad- a transitar por la Ciudad de Buenos Aires. Ofrecemos una lista de lugares accesibles al mostrarse el CUD, asi como eventos que admiten entrada.</p>
        <p className='text-center leading-7 text-2xl'>Ademas, ofrecemos la información basica para comunicarse e ir a esos lugares de manera confiable.</p>
        
        <section className='static'>
              <Image
                src={'/assets/deer.png'}
                alt={'header'}
                height={100}
                width={500}
                className='lg:w-full lg:h-80 mb-5 my-5'
              />
        </section>

        <section>
            <p className='text-center leading-7 text-2xl'>Las ilustraciones que decoran nuestra pagina son del artista Ániko Szabo, del genero naif. Sus pinturas de los diversos paisajes de Buenos Aires y su estilo unico ha inspirado el estilo artistico de esta página. Si desean apoyar al artista, dejaremos sus redes abajo:</p>
            <ul className='flex gap-3'>
                <li className='flex gap-1'><Image src={'/assets/ig.svg'} width={20} height={20} alt={"IG icon"}/>Instagram</li>
                <li>Tienda Online</li>
            </ul>
        </section>

        <h3 className='text-[2.5em] text-center my-4 leading-9'>¡Espere un poco mas!</h3>
        <p className='text-center leading-7 text-2xl'>Vamos Juntos es una database muy temprana, y aun hay mucho que mejorar. En el futuro planeamos usar más integraciones, como un Calendario para los Eventos, una mejor guía para usar los transportes de Buenos Aires, e incorporación de localidades a los alrededores de Buenos Aires.</p>

        <h3 className='text-[2.5em] text-center mt-2 leading-11 italic mb-2'>¡Espero que esta página te ayude a viajar!</h3>
        <p className='text-center leading-6 text-[1.25em] italic'>No tengas miedo de consultarnos y reportar cualquier error con la página.</p>
    </div>
  )
}

export default AboutContainer