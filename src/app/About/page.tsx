import React from "react";
import Image from "next/image";
import HeaderImage from "/public/driver-02.jpg";
import AboutImage from '/public/driver-04.webp';
import CTAsection from "../CTA/CTAsection";
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
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </div>
      {/* header section ends */}

      {/* about section begins */}
      <div className="bg-white px-2 py-10 md:flex md:items-center md:justify-center">
        <div className="about-wrapper my-3 p-2 flex flex-col-reverse md:flex md:flex-row-reverse md:gap-3 lg:w-11/12 lg:mx-auto lg:mt-10">
          {/* text div starts here  */}
          <div className="bg-slate-50 p-2 my-3 h-96 rounded-lg md:w-full lg:py-5">
            <p className="text-2xl font-bold text-blue-500">
              Odinaka <span className="text-black">Innovation</span>
            </p>
            <p className='max-w-prose lg:mb-4'>Welcome to your trusted parner in mobility and logistics solutions. With a passion for excellence and a commitment to relaibility, we strive to redefine the standards of transportation services.</p>
          <p className='max-w-prose lg:mb-4'>At Odinaka Innovation, we understand the importance of seamless transportation in today&apos;s fast-paced world. Weather corporate events, aiport transfer, or special occasion, we tailor our services to meet your unique needs. Our customer-centric approach allows us to deliver a personalized and efficient experience for every client.</p>
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
            <Link href="/Contact">
              <div className="hero-btn-2 bg-blue-500 w-full py-3 px-6 rounded-full my-4 lg:w-1/2 ">
                <p className="text-white text-center hover:text-blue-500">
                  Contact Us
                </p>
              </div>
            </Link>
          </div>
          {/* text div ends here */}

          {/* image div starts here  */}
          <div className="my-3 h-72 w-72 relative rounded-full overflow-hidden mx-auto md:w-full md:h-96 md:rounded-none">
            <Image
              src={AboutImage}
              alt="about-image"
              fill={true}
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>
      </div>
      {/* about section ends here */}

      {/* history section starts */}

      <div className='px-2 py-10 bg-slate-50 flex place-items-center justify-center'>
        <div className='bg-white px-2 py-5 gap-3 md:w-11/12 md:grid md:grid-cols-2 md:gap-3'>
          {/* History text */}
          <div className='p-2 my-3'>
            <p className='text-3xl font-bold leading-tight'><span className='text-blue-500'>Odinaka Innovation,</span>We are Beyond Others in Terms of Transport, Hire and Logistics. <br /> Best Choice Since 2022-Date</p>
            <div className="grid grid-cols-3 gap-3 p-3 my-4">
              {
                imagesData.map((image)=>{
                  return (
                    <div key={ image.id }>
                      <div className='relative h-20 w-20 rounded-full overflow-hidden'>
                        <Image src={ image.img } alt="about-images" fill = { true } style={{objectFit:'cover'}} />
                      </div>
                    </div>
                  )
                })
              }           
            </div>
          </div>
          {/* History text ends here */}

          {/* History content  */}
          <div className='p-2 my-3'>
            <h1 className='font-bold text-2xl text-center my-5'>Our <span className='text-blue-500'>History</span></h1>
            <p className='text-justify max-w-2xl'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita, non. Perferendis eum molestiae expedita ut quidem, voluptatem cum id omnis consequuntur quod hic voluptas cupiditate iusto deleniti repudiandae dignissimos similique?
            </p>
            <p className='text-justify max-w-2xl'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita eum odit explicabo quos? Assumenda accusantium cupiditate voluptas dignissimos laboriosam sed, nulla ad unde, fugiat sunt, corporis qui vitae repudiandae alias?
            </p>
          </div>
          {/* History content ends here */}
        </div>
      </div>
      {/* history section ends  */}

      {/* mission/vision/goal starts here */}
        
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
      {/* mission/vision/goal ends here */}

      {/* CTA section starts  */}

        <CTAsection />

      {/*CTA section ends */}
    </div>
  );
};

export default page;
