import React from 'react';
import Link from 'next/link';
const FooterAbout = () => {
  return (
    <div className='p-2 my-2'>
        <h1 className='text-blue-100 text-xl font-extrabold'>Odinaka Innovation</h1>
        <p className='my-3 text-blue-100'>
          At Odinaka Innovation, we understand the importance of seamless transportation in today&apos;s fast-paced world. Weather corporate events, aiport transfer, or special occasion, we tailor our services to meet your unique needs. Our customer-centric approach allows us to deliver a personalized and efficient experience for every client.        
        </p>
        <Link href='/About'>
            <div className='hero-btn-2 bg-blue-100 w-full py-3 px-6 rounded-lg '>
                <p className='text-blue-500 text-center hover:text-blue-500'>Read More</p>
            </div>
        </Link>
    </div>
  )
}

export default FooterAbout
