import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AlertaContainer = () => {
  return (
        <div className=' py-5 '>
        <h1 className='text-[2.5em] text-center my-5 leading-9 font-black text-red-700'>¡NO A LOS CUDS FALSOS!</h1>
        <p className='text-center leading-7 lg:leading-8 text-[1.30em] lg:text-[1.5em] lg:px-20'>Todos los beneficios mencionados en esta pagina son por y para <span className='font-bold'>personas con discapacidad. Vamos Juntos se opone totalmente a la falsificación de Certificados Únicos de Discapacidad a modo de obtener "ventajas" sobre otros.</span></p>
        
        <Image
        src={'/assets/cudfalso.jpg'}
        width={200}
        height={200}
        alt='CUD Falso'
        className='w-full my-5 lg:w-[50%] lg:mx-auto'
        />

        <h2 className='text-3xl bg-green-800 py-2 lg:my-6 text-white text-[2em] lg:text-[2em] text-center leading-9 mt-5 mb-3 font-bold'>¿Qué está pasando?</h2>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em] mb-5'>Desde el año 2019 se han estado reportando casos de gente falsificando este tipo de certificados, como por ejemplo 13 denunciados que colocaron el simbolo de discapacidad a modo de engañar sobre su condicion y obtener beneficios exclusivos. No obstante, esta problematica ha regresado con mas fuerza estos ultimos años, donde empresas de colectivos y choferes por igual han reportado incidentes con personas poseyentes de un CUD falso a modo de obtener un modo gratuito de trasnporte.</p>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em]'>Estas denuncias llevaron a una investigación a fondo, donde se descubrió una red de compra y venta ilegal de CUDs falsos en plataformas como Facebook Marketplace. También juega un lugar muy imporante la situación economica del pais, en donde el aumento del transporte publico ha hecho que mas personas usesn estos metodos de acceso a modo de acceso.</p>

        <h2 className='lg:text-xl text-3xl bg-green-800 py-2 lg:my-6 text-white text-[2em] lg:text-[2em] text-center leading-9 mt-5 mb-3 font-bold'>¿Por que es importante hablar de esto?</h2>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em] mb-5'>Las consecuencias de la falsificacion de CUDS AFECTA A LAS VERDADERAS PERSONAS CON DISCAPACIDAD. Por ejemplo, muchos colectivos están cambiando su forma de ofrecer el pase, haciendo que una persona discapactiada tenga que mostrar 2 documentos diferentes solamente para poder ingresar al vehículo, lo cual puede otorgar mas complejidad a la hora de viajar.</p>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em] mb-5'>Además, la falsificación de los Certificados Unicos de Discapacidad pueden afectar severamente el proceso de registro de los mismos, haciendo muy dificil poder conseguirlo para personas quienes lo necesiten.</p>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em]'>En la sociedad argentina, se ha estado circulando un sentimiento de "discapacidados falsos", que mientras puede tener fundamentos, su mal uso puede causar prejuicios muy negativos para los 1,3 millones de personas que poseen un CUD en la Argentina.</p>
        
        <section className='bg-red-800 rounded-3xl text-center p-8 lg:py-10  lg:px-15 lg:mx-30 my-5 text-white'>
            <p className='text-center leading-7 lg:leading-5 text-[1.50em] mb-5 font-bold'>El CUD no es un pase gratis.</p>
            <p className='text-center leading-6 lg:leading-5 text-[1.05em] lg:text-[1em] mb-2.5'>Su función sirve para apoyar a personas que posean algún tipo de dificultad para integrarse a la sociedad de forma social, laboral, y <span className='font-bold'>transitoria</span>, de ahí los beneficios de transporte.</p>
            <p><span className='font-bold text-center leading-6 lg:leading-5 text-[1.20em] lg:text-[1em]'>La discapacidad es un paraguas, en el cual entran personas con todo tipo de problemas y dificultades (Mental, Visual, Motora, Visceral, Auditiva, etc). La complejidad de estas desventajas varía según persona, pero todas caen bajo el mismo termino y merecen el mismo respeto.</span></p>
        </section>

        <h2 className='lg:text-xl text-3xl bg-green-800 py-2 lg:my-6 text-white text-[2em] lg:text-[2em] text-center leading-9 mt-5 mb-3 font-bold'>¿Que hacer ante esta problematica?</h2>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em] mb-5'>Al ser un problema reciente el cual parece que seguirá con el tiempo, lo mejor que se puede pedir es, sobre todas las cosas, <span className='font-bold'>denunciar la venta ilegal de estos certificados falsos, así como mantenerse siempre informado de las directivas sobre el CUD.</span></p>
        <p className='lg:px-20 text-center leading-7 lg:leading-5 text-[1.30em] lg:text-[1em] mb-5'></p>

       <h3 className='text-[1.5em] lg:text-3xl text-center leading-9 lg:mb-2.5 font-bold text-green-800'>Fuentes</h3>
        <ul className='list-disc px-5 w-[50%] lg:w-[25%] m-auto'>
          <li className='ml-2 text-[1.05em] max-w-80'><Link href={'https://www.asdra.org.ar/destacados/preocupacion-ante-las-palabras-de-la-ministra-bullrich-acerca-de-quienes-cuentan-con-certificado-de-discapacidad/'}>ASDRA</Link></li>
          <li className='ml-2 text-[1.05em] max-w-80 '><Link href={'https://www.infobae.com/politica/2024/11/26/alerta-en-las-empresas-de-colectivos-por-los-certificados-de-discapacidad-truchos-la-decision-que-tomara-el-gobierno/'}>Infobae</Link></li>
          <li className='ml-2 text-[1.05em] max-w-80'><Link href={'https://www.lanacion.com.ar/sociedad/imputados-usar-certificados-discapacidad-falsos-podrian-recibir-nid2215622/'}>La Nación</Link></li>
        </ul>

    </div>
)
}

export default AlertaContainer