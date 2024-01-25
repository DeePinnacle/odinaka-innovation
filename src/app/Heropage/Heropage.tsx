import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MyHeroImage from '/public/driver-02.jpg';

const Heropage = () => {
  return (
    <div className='bg-blue-100 w-full md:flex md:flex-row md:items-center md:justify-center md:py-0'>
      <div className='px-2 py-4 md:grid md:grid-cols-2 md: gap-3 md:w-full md:py-0 md:h-96 md:px-0 md:pl-3 lg:h-screen'>
        {/* text field */}
        <div className='mb-4 mt-7 p-2 md:mt-0 md:mb-0 md:h-full md:flex md:flex-row md:items-center lg:items-start lg:pt-10'>
          <div> 
            <h1 className='text-2xl font-bold lg:text-6xl lg:leading-tight lg:mb-4'>Fast, Easy and Reliable Way To Book Your <span className='text-blue-500'>Ride</span> and Logistics </h1>
            <p className='py-1'>At Odinaka Innovation, we understand the importance of seamless transportation in today&apos;s fast-paced world</p>
            {/* button container */}
            <div className='flex flex-row gap-2 my-3 lg:mb-4'>
              <Link href='tel:234-816-0478-162'>
                <div className='hero-btn-2 bg-blue-500 w-full py-3 px-6 rounded-full '>
                  <p className='text-white text-center hover:text-blue-500'>Book Now</p>
                </div>
              </Link>
              <Link href='/About'>
                <div className='hero-btn border border-blue-500 w-full py-3 px-6 rounded-full'>
                  <p className='text-center'>Read More</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
        {/* image field */}
        <div className='bg-blue-500 p-2 h-72 w-72 relative rounded-full overflow-hidden mx-auto md:mx-0 md:rounded-none md:h-full md:w-full'> 
          <Image src={ MyHeroImage } alt='hero-image' fill={ true } style={{objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  )
}

export default Heropage;
