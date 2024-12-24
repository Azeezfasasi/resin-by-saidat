// import React from 'react';
// import heroimage from '../../images/heroimage.svg';
// import heroarrow from '../../images/heroarrow.svg';
// import { Link } from 'react-router-dom';

// function Hero() {
//   return (
//     <div className="w-full pt-0.5 flex flex-col md:flex-row gap-0 items-start justify-center self-stretch shrink-0 relative overflow-hidden">
//       {/* left section */}
//         <div className="w-[40%] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//           <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 min-h-[720px] relative">
//             <div className="shrink-0 w-[720px] h-[720px] relative overflow-hidden">
//               <img
//                 className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-hidden"
//                 style={{ objectFit: "cover" }}
//                 src={heroimage}
//               />
//             </div>
//           </div>
//         </div>
//         {/* right section */}
//         <div className="w-[60%] pt-[259.26px] pr-32 pb-[259.27px] pl-32 flex flex-row gap-0 items-center justify-center self-stretch shrink-0 relative">
//           <div className="flex flex-col items-center justify-center flex-1 h-[201.47px] relative">
//             <div className="flex flex-col gap-0 items-start justify-start relative">
//               <div className="text-black text-left font-semibold text-[33px] leading-[40.7px] uppercase relative flex items-center justify-start">
//                 TRACK YOUR MOMENTUM
//               </div>
//             </div>
//             <div className="flex flex-col gap-0 items-start justify-start relative mt-6">
//               <div className="flex-col text-nanuelectricscom-black text-left text-[16.453125px] font-[300] leading-[23.4px] relative flex items-center justify-start">
//                 Enjoy tracking personal goals, daily rituals, or healthy habits
//                 <br />
//                 with this delightfully clickable counter.
//               </div>
//             </div>
//             <Link to="" className="pt-8 pl-[45px] pr-[284.8px] flex flex-col gap-0 items-start justify-start relative">
//               <div className="rounded-md border-solid border-2 pt-[18px] pr-[26px] pb-5 pl-[26px] flex flex-row gap-0 items-center justify-center shrink-0 max-w-[380px] relative">
//                 <div className="flex flex-row gap-[0.2px] items-start justify-start shrink-0 relative">
//                   <div className="text-black text-left font-semibold text-[17.578125px] leading-[21.6px] uppercase relative flex items-center justify-start">
//                     SHOP NOW
//                   </div>
//                   <div className="pt-[3px] pl-2 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
//                     <img
//                       className="self-stretch shrink-0 w-[21px] h-[auto] relative overflow-visible"
//                       src={heroarrow}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </Link>
//           </div>
//         </div>
//       </div>

//   )
// }

// export default Hero

import React from "react";
import heroimage from "../../images/heroimage.svg";
import heroarrow from "../../images/heroarrow.svg";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="w-full pt-0.5 flex flex-col md:flex-row gap-0 items-center justify-center relative overflow-hidden">
      {/* Left Section */}
      <div className="w-full md:w-[40%] flex flex-col items-center justify-start relative">
        <div className="flex flex-col items-center justify-center w-full relative">
          <img
            className="w-full h-auto md:h-[720px] object-cover"
            src={heroimage}
            alt="Hero"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="w-full md:w-[60%] pt-12 md:pt-[259.26px] px-6 md:px-32 pb-12 md:pb-[259.27px] flex flex-col items-center justify-center relative text-center md:text-left">
        <div className="flex flex-col items-center md:items-start justify-center">
          {/* Title */}
          <h1 className="text-black font-semibold text-[24px] md:text-[33px] leading-[30px] md:leading-[40.7px] uppercase">
            TRACK YOUR MOMENTUM
          </h1>

          {/* Description */}
          <p className="mt-6 text-gray-700 text-[14px] md:text-[16.5px] leading-[20px] md:leading-[23.4px]">
            Enjoy tracking personal goals, daily rituals, or healthy habits
            <br className="hidden md:block" />
            with this delightfully clickable counter.
          </p>

          {/* Button */}
          <Link
            to=""
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
