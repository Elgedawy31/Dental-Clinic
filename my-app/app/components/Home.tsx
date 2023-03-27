import React from 'react'
import Image from 'next/image'
import img from '../../public/photo_2023-03-19_12-58-37.jpg'
export  function Main() {
  return (
    <div className='h-screen relative'>
        <Image src={img} alt='' className='absolute left-0 top-0 w-full h-full  object-cover '></Image>
        <div className="z-9 absolute left-20 top-52 ">
        <h1 className='text-5xl mb-5 text-gray-600 '>Our Services</h1>
        <p className='text-gray-900 text-md'>Tuning Your Smile Into An Experience</p>
      </div>
    </div>
  )
}
