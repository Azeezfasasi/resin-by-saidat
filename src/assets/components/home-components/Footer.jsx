import React from 'react';

function Footer() {
  return (
    <>
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col items-center md:items-start justify-start relative">
      <div className=" flex flex-col md:flex-row w-full gap-6 md:gap-0 items-center md:items-start justify-between p-6 md:p-12">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start justify-center">
          <img
            className="w-[150px] h-[59px] object-contain"
            src="link-asset-4-2-x-5-e-2-e-0-d-88-0081-4-d-51-8387-45-e-732-e-0-fc-4-a-150-x-png0.png"
            alt="Logo"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <a
            href="#faq"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            FAQ
          </a>
          <a
            href="#return-policy"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Return Policy
          </a>
          <a
            href="#wholesale"
            className="text-nanuelectricscom-black text-base md:text-lg font-light"
          >
            Wholesale Requests
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
          <img
            className="w-6 h-6"
            src="frame0.svg"
            alt="Social Media Icon 1"
          />
          <img
            className="w-6 h-6"
            src="frame1.svg"
            alt="Social Media Icon 2"
          />
          <img
            className="w-6 h-6"
            src="frame2.svg"
            alt="Social Media Icon 3"
          />
          <img
            className="w-6 h-6"
            src="frame3.svg"
            alt="Social Media Icon 4"
          />
        </div>
      </div>
    </div>
    /* */
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col items-center md:items-start justify-start">
  <div className="p-6 md:p-12 flex flex-col md:flex-row items-center md:items-start justify-between w-full gap-4">
    {/* Left Section */}
    <div className="flex-1 text-center md:text-left">
      <div className="text-nanuelectricscom-black font-light text-sm md:text-base leading-relaxed">
        NANU DESIGN INC. | © 2024
        <br />
        <a href="#terms" className="hover:underline">
          Terms &amp; Conditions
        </a>{' '}
        |{' '}
        <a href="#privacy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex-1 flex justify-center md:justify-end items-center">
      <div className="flex items-center gap-2">
        <div className="relative flex items-center justify-center rounded-md bg-gray-200 px-4 py-2">
          <span className="text-nanuelectricscom-black text-sm uppercase">
            USD $
          </span>
        </div>
        <div>
          <img
            className="w-5 h-5"
            src="frame0.svg"
            alt="Dropdown Icon"
          />
        </div>
      </div>
    </div>
  </div>
</div>
</>
  );
}

export default Footer;
