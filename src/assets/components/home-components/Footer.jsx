import React from 'react';
import resin from '../../images/resin.png';
import fb from '../../images/fb.png';
import instagram from '../../images/instagram.jpg';
import tiktok from '../../images/tiktok.png';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col items-center md:items-start justify-start relative">
      <div className=" flex flex-col md:flex-row w-full gap-6 md:gap-0 items-center md:items-start justify-between p-6 md:p-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <img
            className="w-[150px] h-[59px] object-contain"
            src={resin}
            alt="Logo"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <a
            href="#faq"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Home
          </a>
          <a
            href="#return-policy"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Shop
          </a>
          <a
            href="#wholesale"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Return Policy
          </a>
          <a
            href="#contact-us"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Contact Us
          </a>
        </div>

        {/* Social Media Section */}
        <div className="flex gap-4 justify-center md:justify-start items-center">
          <Link to="">
            <img
              className="w-6 h-6"
              src={fb}
              alt="Social Media Icon 1"
            />
          </Link>
          <Link to="">
            <img
              className="w-6 h-6"
              src={instagram}
              alt="Social Media Icon 2"
            />
          </Link>
          <Link to="">
            <img
              className="w-6 h-6"
              src={tiktok}
              alt="Social Media Icon 3"
            />
          </Link>
        </div>
      </div>
    </div>
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col items-center md:items-start justify-start">
  <div className="p-4 md:p-4 flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4">
    {/* Left Section */}
    <div className="flex flex-col items-center flex-1 text-center md:text-center">
      <div className="text-nanuelectricscom-black font-light text-sm md:text-base leading-relaxed">
        Resin By Saidat | © 2024
        <br />
        <Link to="" className="hover:underline">
          Terms &amp; Conditions
        </Link>{' '}
        |{' '}
        <Link to="" className="hover:underline">
          Privacy Policy
        </Link>
      </div>
    </div>

    {/* Right Section */}
  </div>
</div>
</>
  );
}

export default Footer;
