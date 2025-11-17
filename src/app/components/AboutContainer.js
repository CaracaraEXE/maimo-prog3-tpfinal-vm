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
        <h1 className='text-[2.5em] text-center mb-4 leading-9'>Sobre VJ</h1>
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

            <p className='text-center leading-8 text-[1.30em]'>Montserrat, nuestra fuente principal, es una tipografía inspirada en el diseño grafico del barrio porteño del mismo nombre. Elegimos esta fuente no solo por su estetica, sino tamben por su gran diversidad de grosores, haciendo que sea mucho mas customizable al usar.</p>

          <h2>Sobre la Autora</h2>
          <p>¡Buenas! Me llamo Victoria Mobilia, o sino me gusta el nombre Herbertia. Soy una chica dentro del Espectro Autista, y fui diagnosticada ¡Hace mas de diez años! Cuando era muy chica era mucho de salir, sea por miedo a la ciudad o aburrimiento, pero eso cambió despues de la pandemia del COVID.</p>
          <p>Buenos Aires tiene sus desperfectos, pero sin dudarlo es una ciudad magica. Belleza, historia y arte se esconden hasta en el más común de los barrios, y siempre hay algo para hacer sin importar el tiempo o la estación.</p>
          <p>No obstante, ademas de estar dentro del TEA, también tengo sensibilidad a la luz y el sonido, asi como paralisis debido a condiciones de mi columna, por lo que mi transito en la Ciudad es muy diferente a la persona promedio. No obstante esto me inspiro a crear VJ, ya que incluso a pesar de nuestras complicaciones siempre hay lugares que nos aceptarán y nos guiarán en su recorrido.</p>

        <p className='text-center leading-8 text-[1.30em]'>Vamos Juntos es una database muy temprana, y aun hay mucho que mejorar. En el futuro planeamos usar más integraciones, como un Calendario para los Eventos, una mejor guía para usar los transportes de Buenos Aires, e incorporación de localidades a los alrededores de Buenos Aires.</p>

        <h3 className='text-[1.75em] text-center mt-2 leading-8 italic mb-2'>¡Espero que esta página te ayude a viajar!</h3>
        <p className='text-center leading-8 text-[1.30em] italic'>No tengas miedo de consultarnos y reportar cualquier error con la página.</p>
                </section>
    </div>
  )
}

export default AboutContainer