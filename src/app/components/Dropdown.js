'use client'

import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import React, { useState } from 'react'

const Dropdown = () => {
    const [drop, setDrop] = useState(false);
    const {barrios} = useAppContext();
  
return (
     <div className='flex flex-col items-center justify-center'>
        <button onClick={() => {!drop ? setDrop(true) : setDrop(false)}} className='border-emerald-800 border-2 text-emerald-800 p-2 px-4 rounded-3xl w-[90%] mb-2 mt-4 text-[1.5em] lg:px-10 lg:text-2xl shadow-2xs pr-20 italic font-medium' >
            &#129123; Elegí tu barrio...
        </button>
        {drop && 
            <div className='flex h-50 w-[90%] flex-col overflow-auto border-emerald-800 border-2 text-emerald-800 p-2 px-6 rounded-3xl m-auto mb-5 text-[1.5em] lg:px-10 lg:text-2xl'>
                {barrios.map(barrio =>
                <Link key={barrio._id} href={`/barrio/${barrio._id}`} className='hover:font-medium my-1'>{barrio.name}</Link>
                )}
            </div>
        }
    </div>
)
}

export default Dropdown