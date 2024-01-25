import React from "react";
import Image from "next/image";
import HeaderImage from "/public/driver-01.png";
import AboutImage from "/public/driver-02.jpg";
import CTAsection from "../CTA/CTAsection";
import ServiceSection from './Servicesection';
import TestimonialSection from '../Testimonies/TestimonialSection';
import Link from 'next/link';
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  HandThumbUpIcon
} from "@heroicons/react/24/outline";
const page = () => {
  const imagesData = [
    {
      id: 1,
      img: AboutImage
    },
    {
      id: 2,
      img: HeaderImage
    },
    {
      id: 3,
      img: AboutImage
    }
  ]


  const MissionVisionData = [
    {
      icon: <HandThumbUpIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Mission',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et tempore suscipit adipisicing elit. Iusto et tempore suscipit',
    },    
    {
      icon: <HandThumbUpIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Vision',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et tempore suscipit adipisicing elit. Iusto et tempore suscipit',
    },    
    {
      icon: <HandThumbUpIcon className='text-center h-16 mx-auto text-blue-400' />,
      title: 'Our Goal',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto et tempore suscipit adipisicing elit. Iusto et tempore suscipit',
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
          <h1 className="text-white text-4xl font-bold">Our Services</h1>
        </div>
      </div>
      {/* header section ends */}


      {/* history section starts */}

      <div className='px-2 py-10 bg-slate-50 flex place-items-center justify-center'>
        <div className='px-2 py-5 gap-3'>
          {/* History text */}
          <div className='p-2 my-3'>
            <p className='text-3xl font-bold leading-tight max-w-prose text-center'><span className='text-blue-500'>Odinaka Innovation,</span><br />Your Best Choice For Mobility, Logistics and Hire.</p>
            <p className='max-w-prose text-center my-3'>We provide top notch services to our customers making us stand out among others.</p>
          </div>
          {/* History text ends here */}

        </div>
      </div>
      {/* history section ends  */}

        <ServiceSection />

      {/* service section starts  */}

      <TestimonialSection />

      {/* service section ends here */}

      {/* CTA section starts  */}

        <CTAsection />

      {/*CTA section ends */}
    </div>
  );
};

export default page;
