// import React from 'react'

// function ProductHomeSection() {
//   return (
//     <div className="border-solid border-nanuelectricscom-black border-t-2 pt-0.5 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
//   <div className="bg-nanuelectricscom-nero flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//     <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 min-h-[720px] relative">
//       <div className="shrink-0 w-[720px] h-[720px] relative overflow-hidden">
//         <img
//           className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-hidden"
//           style={{ objectFit: "cover" }}
//           src="homepage-arc-image-720-x-jpg0.png"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="bg-nanuelectricscom-nero pt-[247.56px] pr-32 pb-[247.58px] pl-32 flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
//     <div className="flex-1 h-[224.86px] relative">
//       <div className="pr-[143px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-0">
//         <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-semi-bold-331-upper-font-family text-nanuelectricscom-inter-semi-bold-331-upper-font-size leading-nanuelectricscom-inter-semi-bold-331-upper-line-height font-nanuelectricscom-inter-semi-bold-331-upper-font-weight uppercase relative max-w-[464px] max-h-[40.7px] flex items-center justify-start">
//           ARC ALARM CLOCK
//         </div>
//       </div>
//       <div className="pr-[19px] pb-[0.17px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[61.69px]">
//         <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1645-font-family text-nanuelectricscom-inter-light-1645-font-size leading-nanuelectricscom-inter-light-1645-line-height font-nanuelectricscom-inter-light-1645-font-weight relative max-w-[464px] flex items-center justify-start">
//           An analog-style alternative to your smartphone for a more
//           <br />
//           mindful space and better sleep. Secure your spot and join
//           <br />
//           1000+ backers in our development journey of Arc.
//         </div>
//       </div>
//       <div className="pt-8 pr-[266.95px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[132.86px]">
//         <div className="bg-nanuelectricscom-white-linen rounded-md border-solid border-nanuelectricscom-black border-2 pt-[18px] pr-[26px] pb-5 pl-[26px] flex flex-row gap-0 items-center justify-center shrink-0 max-w-[380px] relative">
//           <div className="flex flex-row gap-[0.05px] items-start justify-start shrink-0 relative">
//             <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-semi-bold-1786-upper-font-family text-nanuelectricscom-inter-semi-bold-1786-upper-font-size leading-nanuelectricscom-inter-semi-bold-1786-upper-line-height font-nanuelectricscom-inter-semi-bold-1786-upper-font-weight uppercase relative flex items-center justify-start">
//               LEARN MORE
//             </div>
//             <div className="pt-[3px] pl-2 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
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
// </div>

//   )
// }

// export default ProductHomeSection

import React from 'react'

function ProductHomeSection() {
  return (
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-2 flex flex-col md:flex-row gap-6 md:gap-0 items-start justify-start relative overflow-hidden">
      {/* Left Section */}
      <div className="bg-nanuelectricscom-nero flex flex-col items-center justify-start w-full md:w-1/2">
        <div className="relative w-full h-[360px] md:h-[400px] overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="homepage-arc-image-720-x-jpg0.png"
            alt="Arc Alarm Clock"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-nanuelectricscom-nero p-6 md:p-12 flex flex-col items-center md:items-start justify-center w-full md:w-1/2">
        {/* Title */}
        <div className="text-nanuelectricscom-black text-center md:text-left font-semibold uppercase text-lg md:text-3xl mb-4">
          ARC ALARM CLOCK
        </div>

        {/* Description */}
        <div className="text-nanuelectricscom-black text-center md:text-left text-sm md:text-base leading-relaxed max-w-full md:max-w-[464px] mb-6">
          An analog-style alternative to your smartphone for a more mindful space and better sleep. Secure your spot and join 1000+ backers in our development journey of Arc.
        </div>

        {/* Button */}
        <div className="flex justify-center md:justify-start">
          <button className="bg-nanuelectricscom-white-linen rounded-md border-2 border-nanuelectricscom-black px-6 py-3 text-nanuelectricscom-black font-semibold uppercase text-sm md:text-base flex items-center gap-2">
            LEARN MORE
            <img
              className="w-5 h-5"
              src="frame0.svg"
              alt="Arrow Icon"
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductHomeSection
