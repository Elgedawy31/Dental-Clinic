import React from 'react'
import Image from 'next/image'
import img  from '../../public/photo.jpg'
function Footer() {
  return (
    <div className='flex items-center flex-col container'>
        
        <Image src={img} alt='' className='' style={{width:'250px' , height:'250px' , objectFit:'cover'}}></Image>
        <h2 className='text-3xl mb-5 text-cyan-400'>We Hop That Your Experience In Our Clinc Exceded Your experctions</h2>
        <p className='text-gray-500 text-sm mb-5'>We Appreciate Your Trust And Hope You Want To Leave Us A Positive Review</p>
        <span className='text-center mb-5 text-gray-900'>Contact Us Directly <br /> To Make Things Right to You</span>
        <div className="flex gap-20 mb-2">
            <div className='text-cyan-500 text-2xl'>Facebook </div>
            <div className='text-cyan-500 text-2xl'>Google </div>

        </div>

    </div>
  )
}

export default Footer