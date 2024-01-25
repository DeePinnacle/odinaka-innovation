import React from 'react';
import { PhoneIcon, BanknotesIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
const Featuresection = () => {
  return (
    <div className='p-2 py-16 lg:py-36'>
        <div className='my-6'>
            <h1 className='text-center text-xl font-bold lg:text-6xl'>Our <span className='text-blue-500'>Features</span></h1>
            <p className='text-center text-blue-500 lg:text-2xl'>Why Choose Us</p>
            <p className='text-center my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi, debitis culpa.</p>
            {/* features wrapper  */}
            <div className='p-2 md:grid md:grid-cols-2 md:gap-3 lg:w-4/5 lg:mx-auto lg:mt-10'>
                <div className='bg-blue-50 p-2 flex flex-row gap-3 my-3'>
                    <div className='bg-blue-500 p-2 h-10 w-11 rounded-md flex flex-row items-center justify-center'>
                        <BanknotesIcon className='text-white h-7 font-bold' />
                    </div>
                    <div className='p-2'>
                        <h1 className='font-bold'>Affordable Price</h1>
                        <p>We are highly affordable, you don&apos;t break the bank using our services.</p>
                    </div>
                </div>
                <div className='bg-blue-50 p-2 flex flex-row gap-3 my-3'>
                    <div className='bg-blue-500 p-2 h-10 w-11 rounded-md flex flex-row items-center justify-center'>
                        <PhoneIcon className='text-white h-7 font-bold' />
                    </div>
                    <div className='p-2'>
                        <h1 className='font-bold'>24/7 Customer Support</h1>
                        <p>Actively ready to attend to you, give us a call at any point in time our customer support is highly active.</p>
                    </div>
                </div>
                <div className='bg-blue-50 p-2 flex flex-row gap-3 my-3'>
                    <div className='bg-blue-500 p-2 h-10 w-11 rounded-md flex flex-row items-center justify-center'>
                        <TruckIcon className='text-white h-7 font-bold' />
                    </div>
                    <div className='p-2'>
                        <h1 className='font-bold'>Fast Delivery</h1>
                        <p>Get it delivered real fast with Odinika Innovation. We readily available to get your goods delivered.</p>
                    </div>
                </div>
                <div className='bg-blue-50 p-2 flex flex-row gap-3 my-3'>
                    <div className='bg-blue-500 p-2 h-10 w-11 rounded-md flex flex-row items-center justify-center'>
                        <ShieldCheckIcon className='text-white h-7 font-bold' />
                    </div>
                    <div className='p-2'>
                        <h1 className='font-bold'>Verified License</h1>
                        <p>Odinaka Innovation is a registered and verified company, we are the best at what we do.</p>
                    </div>
                </div>
            </div>
            {/* features wrapper ends here */}
        </div>
    </div>

  )
}

export default Featuresection;
