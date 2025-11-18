'use client'

import { useAppContext } from '@/context/AppContext';
import Link from 'next/link';
import React, { useState } from 'react'

const Dropdown = () => {
    const [drop, setDrop] = useState(false);
    const {barrios} = useAppContext();
  
return (
     <div className=''>
        <button onClick={() => {!drop ? setDrop(true) : setDrop(false)}}>
            Escogé su barrio......
        </button>
        {drop && 
            <div className=' mt-2 flex h-40 w-60 flex-col overflow-auto'>
                {barrios.map(barrio =>
                <Link key={barrio._id} href={`/barrio/${barrio._id}`}>{barrio.name}</Link>
                )}
            </div>
        }
    </div>
)
}

export default Dropdown