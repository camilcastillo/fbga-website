import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (<>
    <footer className='w-full px-12 py-24 bg-white border-t-2'>
      <div className='flex gap-4 w-full justify-center'>
      <div className='w-44 h-44 items-center justify-center flex'>
          <Image src={'/images/companies/cap.jpeg'} alt='Company1' width={100} height={100} className='w-full h-full'/>
      </div>
      <div className='w-44 h-44 items-center justify-center flex'>
          <Image src={'/images/companies/comite-olimpico.jpeg'} alt='Company1' width={100} height={100} className='w-full h-full'/>
      </div>
      <div className='w-44 h-44 items-center justify-center flex'>
          <Image src={'/images/companies/enard.jpeg'} alt='Company1' width={100} height={100} className='w-full h-full'/>
      </div>
      <div className='w-44 h-44 items-center justify-center flex'>
          <Image src={'/images/companies/world-skate-america.jpeg'} alt='Company1' width={100} height={100} className='w-full h-full'/>
      </div>
      <div className='w-44 h-44 items-center justify-center flex'>
          <Image src={'/images/companies/world-skate.jpeg'} alt='Company1' width={100} height={100} className='w-full h-full'/>
      </div>

</div>
    </footer>
<p className='opacity-60 text-center my-2'>{`Todos los derechos reservados - Federación Gran Buenos Aires ${new Date().getFullYear()}`}</p>
</>
  )
}

export default Footer