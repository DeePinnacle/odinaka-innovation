import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AboutImage from '/public/driver-04.webp'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';
const Aboutpage = () => {
  return (
    <div className='bg-white px-2 py-32'>
      <h1 className='font-bold text-2xl text-center mt-7 lg:text-6xl'>About <span className='text-blue-500'>Us</span></h1>
      <p className='text-center text-blue-500 lg:text-2xl'> Who We Are</p>
      <div className='about-wrapper my-3 p-2 md:flex md:flex-row-reverse md:gap-3 lg:w-11/12 lg:mx-auto lg:mt-10'>
        {/* text div starts here  */}
        <div className='bg-slate-50 p-2 my-3 min-h-28 rounded-lg md:w-full lg:py-5'>
          <p className='text-2xl font-bold text-blue-500'>Odinaka <span className='text-black'>Innovation</span></p>
          <p className='max-w-prose lg:mb-4'>Welcome to your trusted partner in mobility and logistics solutions. With a passion for excellence and a commitment to reliability, we strive to redefine the standards of transportation services.</p>
          <p className='max-w-prose lg:mb-4'>At Odinaka Innovation, we understand the importance of seamless transportation in today&apos;s fast-paced world. Whether corporate events, airport transfers, or special occasions, we tailor our services to meet your unique needs. Our customer-centric approach allows us to deliver a personalized and efficient experience for every client.</p>
          <div className='flex flex-row items-center gap-2'>
            <MapPinIcon className='text-blue-500 h-5' />
            <p className='text-blue-500'>Kubwa, FCT, Abuja</p>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <EnvelopeIcon className='text-blue-500 h-5' />
            <Link href='mailto:odinakainnovation@gmail.com' className='text-blue-500'>odinakainnovation@gmail.com</Link>
          </div>
          <div className='flex flex-row items-center gap-2'>
            <PhoneIcon className='text-blue-500 h-5' />
            <Link href='tel:234-816-0478-162' className='text-blue-500'>Phone: 234-816-0478-162</Link>
          </div>
          <Link href='/About'>
            <div className='hero-btn-2 bg-blue-500 w-full py-3 px-6 rounded-full my-4 lg:w-1/2 '>
              <p className='text-white text-center hover:text-blue-500'>Read More</p>
            </div>
          </Link>
        </div>
        {/* text div ends here */}

        {/* image div starts here  */}
        <div className='my-3 h-96 relative rounded-lg overflow-hidden md:w-full'>
          <Image src={ AboutImage } alt='about-image' fill={ true } style={{objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  )
}

export default Aboutpage
