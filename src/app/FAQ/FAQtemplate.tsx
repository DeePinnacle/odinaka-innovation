'use client';
import React from 'react';
import { useState } from 'react';
import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline';

type FAQProps = {
    question: string,
    answer: string
}
const FAQtemplate = ({ question, answer }: FAQProps) => {

    const [ isAccordionOpen, setAccordion ] = useState(false);
    const handleAccordion = ()=>{
        setAccordion(!isAccordionOpen);
    }

  return (
    <div className='faq-wrapper my-2'>
        <div className='px-2 py-4 bg-white flex flex-row justify-between items-center rounded-t-md shadow-md'>
        <h1 className='font-bold cursor-pointer' onClick = { handleAccordion } >{ question }</h1>
        {
            isAccordionOpen ? (
                <XMarkIcon className='h-6 font-bold cursor-pointer' onClick = { handleAccordion } />
            ) : (
                <PlusIcon className='h-6 font-bold cursor-pointer' onClick = { handleAccordion } />
            )
        }
        </div>
        { isAccordionOpen &&
        (
            <div>
            <div className='p-2 bg-white rounded-b-md md:p-5'>
                <p>{ answer }</p>
            </div>
            </div>
        )
        }

        
        {/* method two  */}
        {/* // <div className={`${isAccordionOpen ? 'block' : 'hidden'}`}>
        // <div className='p-2 bg-white rounded-b-md md:p-5'>
        //     <p>{ answer }</p>
        // </div>
        // </div> */}
  </div>
  )
}

export default FAQtemplate