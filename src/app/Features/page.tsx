import React from "react";
import Image from "next/image";
import HeaderImage from "/public/driver-01.png";
import AboutImage from "/public/driver-02.jpg";
import CTAsection from "../CTA/CTAsection";
import Features from './Featuresection'
import TestimonialSection from '../Testimonies/TestimonialSection';
import FAQ from '../FAQ/FAQsection'
import Link from 'next/link';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  HandThumbUpIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
  RocketLaunchIcon
} from "@heroicons/react/24/outline";
const page = () => {

  const MissionVisionData = [
    {
      icon: <LightBulbIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Mission',
      description: 'Providing seamless and reliable transportation solutions to connect people and goods, prioritizing safety, efficiency, and sustainability',
    },    
    {
      icon: <RocketLaunchIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Vision',
      description: 'To be the leading innovator in the transport industry, fostering global connectivity through cutting-edge technologies, eco-friendly practices, and commitment to exceeding customer expectations.',
    },    
    {
      icon: <ArrowTrendingUpIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Goal',
      description: 'To ensure efficient and reliable movement of people and goods while prioritixing safety, sustainability, and customer satisfaction.',
    },
  ]


  return (
    <div className="about-header-container">
      {/* header section */}
      <div className="relative h-44 w-full p-5 overflow-hidden">
        <Image
          src={HeaderImage}
          alt="service-image01"
          fill={true}
          style={{ objectFit: "cover" }}
        />
        <div className="absolute top-0 bottom-0 right-0 left-0 bg-blue-500/70 flex flex-col place-items-center justify-center">
          <h1 className="text-white text-4xl font-bold">Why Choose Us</h1>
        </div>
      </div>
      {/* header section ends */}



      <div className='px-2 py-10 bg-slate-50 flex place-items-center justify-center'>
        <div className='px-2 py-5 gap-3'>
          <div className='p-2 my-3'>
            <p className='text-3xl font-bold leading-tight max-w-prose text-center'><span className='text-blue-500'>Odinaka Innovation,</span><br />Your Best Choice For Mobility, Logistics and Hire.</p>
            <p className='max-w-prose text-center my-3'>We provide top notch services to our customers making us stand out among others.</p>
          </div>

        </div>
      </div>

      <Features />

      {/* mission and vision */}

      <div className='mission-vision-section bg-slate-50 p-2 flex items-center justify-center'>
          <div className='p-2 max-w-3xl md:grid md:grid-cols-3 md:gap-3'>
            {
              MissionVisionData.map((content, index)=> {
                return (
                  <div className='bg-blue-200 px-2 py-6 my-3 rounded-sm shadow-sm' key={ index }>
                    <div className='h-24 w-24 bg-white rounded-full p-2 flex items-center justify-center mx-auto'>
                      { content.icon }
                    </div>
                    <h2 className='text-center text-xl font-bold my-4'>{ content.title }</h2>
                    <div className='px-3 py-5'>
                      <p className='text-center leading-relaxed'>{ content.description }</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

      {/* mission and vision  */}



      <TestimonialSection />
      <CTAsection />
      <FAQ />
    </div>
  );
};

export default page;
