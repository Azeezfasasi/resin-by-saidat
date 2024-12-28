import React from 'react';
import saidat from '../../images/saidat.png';

function About() {
  return (
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-0.5 flex flex-col md:flex-row gap-0 items-start justify-start relative overflow-hidden">
      {/* Left Section */}
      <div className="bg-nanuelectricscom-nero flex flex-col items-center justify-start w-full md:w-1/2">
        <div className="min-h-[300px] md:min-h-[600px] w-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={saidat}
            alt="About Us"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-nanuelectricscom-nero px-6 py-8 md:px-32 md:py-[159.09px] flex flex-col items-center justify-start w-full md:w-1/2">
        <div className="flex flex-col items-start justify-start w-full">
          {/* Title */}
          <div className="text-nanuelectricscom-black text-center md:text-left font-bold text-xl md:text-3xl uppercase mb-6">
            About Resin By Saidat
          </div>

          {/* Description */}
          <div className="text-nanuelectricscom-black text-justify md:text-justify text-sm md:text-base leading-relaxed space-y-4">
            <p>
            Founded in 2024, Resin By Saidat has become a trusted provider of premium resin materials, offering an extensive selection of resins for different industries. From durable and versatile construction-grade resins to artistic resins used in creative projects, we provide products that exceed quality standards and deliver exceptional results.
            <br /><br />
            Our mission is to provide high-performance resin solutions that empower businesses, artists, and DIY enthusiasts alike. With a focus on quality, sustainability, and innovation, we aim to be your go-to partner for all things resin.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
