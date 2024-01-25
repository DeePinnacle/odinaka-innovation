import React from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

type ToggleVoid = {
  handleToggle: () => void;
}
const Toggle = ({ handleToggle }: ToggleVoid) => {
  return (
    <div className='bg-blue-500 p-2 rounded' onClick = { handleToggle }>
      <Bars3Icon className='h-5 text-white' />
    </div>
  )
}

export default Toggle