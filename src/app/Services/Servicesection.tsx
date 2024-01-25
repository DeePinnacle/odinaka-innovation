import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServiceImage01 from "/public/driver-01.png";
import ServiceImage02 from "/public/car-01.jpg";
import ServiceImage03 from "/public/driver-03.webp";
const Services = () => {
  return (
    <div className="services-contianer bg-zinc-700 px-2 py-16 lg:py-44">
      <h1 className="font-bold text-2xl text-center mt-7 lg:text-6xl">
        Our <span className="text-blue-500">Services</span>
      </h1>
      <p className="text-center text-blue-500 lg:text-2xl"> what We Offer</p>
      <p className="text-center my-2 text-slate-100">
        We provide top-notch, first class services to certisfy our customers needs.
      </p>
      <div className="services-wrapper mb-4 p-2 md:grid md:grid-cols-3 md:gap-3 md:mt-44 md:mb-8 lg:w-4/5 lg:mx-auto lg:mt-48">
        {/* services card starts here */}
        <div className="bg-white my-52 p-2 rounded-lg shadow-md shadow-blue-100 relative md:my-0">
          {/* card image container */}
          <div className="absolute -top-1/2 right-1/2 transform translate-x-1/2 p-2 h-56 w-11/12 ">
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src={ServiceImage01}
                alt="service-image01"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* card image container ends here */}

          {/* card text container */}
          <div className="bg-blue-100 p-2 mt-20">
            <p className="text-lg text-center font-bold my-4">
              Mobility Services
            </p>
            <p className="text-center text-zinc-700">
              We provide first class and top notch mobility service. We are highly available to take your destination with ease and comfort.
            </p>
            <Link href="/Services">
              <div className="hero-btn-2 bg-blue-500 w-full py-3 my-3 px-6 rounded-full ">
                <p className="text-white text-center hover:text-blue-500">
                  Read more
                </p>
              </div>
            </Link>
          </div>
          {/* card text container ends here */}
        </div>
        {/* services card ends here */}

        {/* services card starts here */}
        <div className="bg-white p-2 rounded-lg shadow-md shadow-blue-100 relative">
          {/* card image container */}
          <div className="absolute -top-1/2 right-1/2 transform translate-x-1/2 p-2 h-56 w-11/12 ">
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src={ServiceImage02}
                alt="service-image01"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* card image container ends here */}

          {/* card text container */}
          <div className="bg-blue-100 p-2 mt-20">
            <p className="text-lg text-center font-bold my-4">
              Car Hire Services
            </p>
            <p className="text-center text-zinc-700">
              We are readily available for hire services. We provide good and well maintained auto-mobile to move you about.
            </p>
            <Link href="/Services">
              <div className="hero-btn-2 bg-blue-500 w-full py-3 my-3 px-6 rounded-full ">
                <p className="text-white text-center hover:text-blue-500">
                  Read more
                </p>
              </div>
            </Link>
          </div>
          {/* card text container ends here */}
        </div>
        {/* services card ends here */}

        {/* services card starts here */}
        <div className="bg-white mt-52 p-2 rounded-lg shadow-md shadow-blue-100 relative md:mt-0">
          {/* card image container */}
          <div className="absolute -top-1/2 right-1/2 transform translate-x-1/2 p-2 h-56 w-11/12 ">
            <div className="relative h-52 rounded-lg overflow-hidden">
              <Image
                src={ServiceImage03}
                alt="service-image01"
                fill={true}
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          {/* card image container ends here */}

          {/* card text container */}
          <div className="bg-blue-100 p-2 mt-20">
            <p className="text-lg text-center font-bold my-4">
              Logistics Services
            </p>
            <p className="text-center text-zinc-700">
              We provide the best logistics service they is at fast speed and top notch guaranteed. Contact us for your logistics service.
            </p>
            <Link href="/Services">
              <div className="hero-btn-2 bg-blue-500 w-full py-3 my-3 px-6 rounded-full ">
                <p className="text-white text-center hover:text-blue-500">
                  Read more
                </p>
              </div>
            </Link>
          </div>
          {/* card text container ends here */}
        </div>
        {/* services card ends here */}
      </div>
    </div>
  );
};

export default Services;
