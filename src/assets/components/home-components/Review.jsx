// import React from 'react'

// function Review() {
//   return (
//     <div className="border-solid border-nanuelectricscom-black border-t-2 pt-0.5 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
//   <div className="bg-nanuelectricscom-white-linen pt-[218.06px] pr-32 pb-[218.07px] pl-32 flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
//     <div className="flex flex-col gap-0 items-start justify-start flex-1 relative">
//       <div className="pr-[193px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//         <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-semi-bold-3382-upper-font-family text-nanuelectricscom-inter-semi-bold-3382-upper-font-size leading-nanuelectricscom-inter-semi-bold-3382-upper-line-height font-nanuelectricscom-inter-semi-bold-3382-upper-font-weight uppercase relative max-w-[464px] max-h-[40.7px] flex items-center justify-start">
//           REVIEWS ARE IN
//         </div>
//       </div>
//       <div className="self-stretch shrink-0 h-[151.17px] relative">
//         <div className="pr-[397.71px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[9px]">
//           <div className="text-nanuelectricscom-black text-left font-['SegoeUi-Regular',_sans-serif] text-[11.25px] leading-[27px] font-normal uppercase relative w-[66.29px] max-w-[464px] flex items-center justify-start">
//             ★ ★ ★ ★ ★
//           </div>
//         </div>
//         <div className="pr-[23px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-16">
//           <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1631-font-family text-nanuelectricscom-inter-light-1631-font-size leading-nanuelectricscom-inter-light-1631-line-height font-nanuelectricscom-inter-light-1631-font-weight relative max-w-[464px] flex items-center justify-start">
//             Quality you can feel. It feels like something built ages ago,
//             <br />
//             before cheap plastic invaded our lives. Love it so far.
//           </div>
//         </div>
//         <div className="pr-[393px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[127.78px]">
//           <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1645-font-family text-nanuelectricscom-inter-light-1645-font-size leading-nanuelectricscom-inter-light-1645-line-height font-nanuelectricscom-inter-light-1645-font-weight relative max-w-[464px] max-h-[23.4px] flex items-center justify-start">
//             — Martin
//           </div>
//         </div>
//       </div>
//       <div className="pt-8 pr-[264.77px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//         <div className="bg-nanuelectricscom-nero rounded-md border-solid border-nanuelectricscom-black border-2 pt-[18px] pr-[26px] pb-5 pl-[26px] flex flex-row gap-0 items-center justify-center shrink-0 max-w-[380px] relative">
//           <div className="flex flex-row items-start justify-start shrink-0 relative">
//             <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-semi-bold-1786-upper-font-family text-nanuelectricscom-inter-semi-bold-1786-upper-font-size leading-nanuelectricscom-inter-semi-bold-1786-upper-line-height font-nanuelectricscom-inter-semi-bold-1786-upper-font-weight uppercase relative flex items-center justify-start">
//               Shop Nudge
//             </div>
//             <div
//               className="pt-[3px] pl-2 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative"
//               style={{ margin: "0 0 0 -0.77px" }}
//             >
//               <img
//                 className="self-stretch shrink-0 w-[21px] h-[auto] relative overflow-visible"
//                 src="frame0.svg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="bg-nanuelectricscom-white-linen self-stretch shrink-0 relative">
//     <div className="flex flex-col gap-0 items-center justify-start min-h-[720px] absolute right-6 left-6 top-6">
//       <div className="shrink-0 w-[672px] h-[672px] relative overflow-hidden">
//         <img
//           className="rounded-md w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-hidden"
//           style={{ objectFit: "cover" }}
//           src="homepage-reviews-image-720-x-jpg0.png"
//         />
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default Review

import React from 'react';

function Review() {
  return (
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col md:flex-row gap-6 items-center justify-center overflow-hidden">
      {/* Left Section */}
      <div className="bg-nanuelectricscom-white-linen p-6 md:p-12 flex flex-col gap-6 items-center md:items-start justify-center w-full md:w-1/2">
        {/* Title */}
        <div className="text-nanuelectricscom-black text-center md:text-left font-semibold uppercase text-lg md:text-3xl">
          Reviews Are In
        </div>

        {/* Rating */}
        <div className="text-nanuelectricscom-black text-center md:text-left font-light text-sm uppercase">
          ★ ★ ★ ★ ★
        </div>

        {/* Review Text */}
        <div className="text-nanuelectricscom-black text-center md:text-left text-sm md:text-base leading-relaxed max-w-full md:max-w-[464px]">
          Quality you can feel. It feels like something built ages ago, before cheap plastic invaded our lives. Love it so far.
        </div>

        {/* Reviewer */}
        <div className="text-nanuelectricscom-black text-center md:text-left text-sm md:text-base italic">
          — Martin
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-nanuelectricscom-nero rounded-md border-2 border-nanuelectricscom-black px-6 py-3 text-nanuelectricscom-black font-semibold uppercase text-sm flex items-center gap-2">
            Shop Nudge
            <img
              className="w-5 h-5"
              src="frame0.svg"
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-nanuelectricscom-white-linen flex justify-center items-center w-full md:w-1/2">
        <div className="w-[90%] md:w-[672px] h-[90%] md:h-[672px] rounded-md overflow-hidden">
          <img
            className="w-full h-full object-cover rounded-md"
            src="homepage-reviews-image-720-x-jpg0.png"
            alt="Review Image"
          />
        </div>
      </div>
    </div>
  );
}

export default Review;
