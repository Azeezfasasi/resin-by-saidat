import React from "react";
import heroimage from "../../images/heroimage.svg";
import heroarrow from "../../images/heroarrow.svg";
import { Link } from "react-router-dom";
import resinhero from '../../images/resinhero.png';

function Hero() {
  return (
    <div className="w-full pt-0.5 flex flex-col md:flex-row gap-0 items-center justify-center relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-start relative">
        <div className="flex flex-col items-center justify-center w-full relative">
          <img
            className="w-full h-auto md:h-[520px] object-cover"
            src={resinhero}
            alt="Hero"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[60%] pt-12 px-6 md:px-20 pb-12 flex flex-col items-center justify-center relative text-center md:text-left">
        <div className="flex flex-col items-center md:items-start justify-center">
          {/* Title */}
          <h1 className="text-black font-semibold text-[24px] md:text-[33px] leading-[30px] md:leading-[40.7px] uppercase">
            Transform Your Creations with Premium Resin Materials
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-700 text-[14px] md:text-[16.5px] leading-[20px] md:leading-[23.4px]">
          Discover our high-quality resins, designed for endless possibilities in crafting, construction, and manufacturing. Whether you're creating stunning art pieces, durable industrial components, or unique home decor, our resins offer unmatched strength, clarity, and versatility.
          </p>

          {/* Button */}
          <Link
            to="/app/shop"
            className="mt-8 flex flex-row items-center justify-center gap-2 px-6 py-3 md:px-[26px] md:py-[18px] border-2 border-black rounded-md max-w-[250px] md:max-w-[380px]"
          >
            <span className="text-black font-semibold text-[15px] md:text-[17.5px] uppercase">
              Shop Now
            </span>
            <img
              className="w-5 md:w-[21px]"
              src={heroarrow}
              alt="Arrow Icon"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
