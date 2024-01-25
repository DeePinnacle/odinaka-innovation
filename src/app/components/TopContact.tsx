import React from 'react'
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
const TopContact = () => {
  return (
    <div className='bg-blue-500 p-3 md:flex flex-row justify-around'>
      <div className='flex flex-row items-center gap-2'>
        <MapPinIcon className='text-white h-5' />
        <p className='text-gray-300'>Kubwa, phase 4, Fed Housing</p>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <EnvelopeIcon className='text-white h-5' />
        <Link href='mailto:odinakainnovation@gmail.com' className='text-gray-300'>odinakainnovation@gmail.com</Link>
      </div>
      <div className='flex flex-row items-center gap-2'>
        <PhoneIcon className='text-white h-5' />
        <Link href='tel:+234-816-0478-162' className='text-gray-300'>Phone: +234-816-0478-162</Link>
      </div>
    </div>
  )
}

export default TopContact