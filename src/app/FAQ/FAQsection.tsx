'use client';
import React from 'react';
import FAQtemplate from './FAQtemplate';
import { FAQs } from './FAQs';
import { useState } from 'react';
const FAQsection = () => {

  const [ faqContents, setFaqContents ] = useState(FAQs);

  return (
    <div className='p-2 py-10 lg:py-36'>
        <div className='my-4'>
            <h1 className='text-center text-xl font-bold lg:text-4xl'>Frequently <span className='text-blue-500'>Asked</span> Question</h1>
        </div>
        {/* flex container */}
        <div className='bg-slate-50 p-2 md:grid md:grid-cols-2 md:gap-3 md:w-4/5 md:mx-auto md:mt-12'>
          {
            faqContents.map((FAQ)=>(
                <FAQtemplate key={ FAQ.id } { ...FAQ } />   

                // method two
                // <FAQtemplate key={ FAQ.id } question={ FAQ.question } answer={ FAQ.answer } />   
            ))
          }
        </div>
        {/* flex container ends */}
    </div>
  )
}

export default FAQsection;