import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <section>
            <p className='bg-red-800 text-white'>¡NO A LOS CUD FALSOS! <Link href={"/alerta"}>Lee nuestra declaración completa</Link></p>
        </section>
    </div>
  )
}

export default NavBar