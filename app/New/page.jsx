import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
    <div className='flex justify-center items-center font-bold h-screen'>
      new 

      <Image 
      src='/doctor.png'
      alt="doctor"
      width={200}
      height={200}
      />
    </div>
  )
}

export default page
