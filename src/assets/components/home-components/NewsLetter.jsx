// import React from 'react'

// function NewsLetter() {
//   return (
//     <div className="bg-nanuelectricscom-black border-solid border-nanuelectricscom-black border-t-2 pt-[50px] pb-12 flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//   <div className="pr-12 pl-12 flex flex-row items-center justify-between self-stretch shrink-0 relative">
//     <div className="flex flex-col gap-[17px] items-start justify-start shrink-0 relative">
//       <div className="pr-[279px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//         <div className="text-nanuelectricscom-nero text-left font-['Inter-SemiBold',_sans-serif] text-[26.8359375px] leading-[33px] font-semibold uppercase relative flex items-center justify-start">
//           GET THE NEWSLETTTER
//         </div>
//       </div>
//       <div className="flex flex-col gap-0 items-start justify-start shrink-0 relative">
//         <div className="pr-[11px] pb-[0.59px] flex flex-col gap-0 items-start justify-start w-[100%] shrink-0 max-w-[600px] relative">
//           <div className="text-nanuelectricscom-nero text-left font-nanuelectricscom-inter-light-1463-font-family text-nanuelectricscom-inter-light-1463-font-size leading-nanuelectricscom-inter-light-1463-line-height font-nanuelectricscom-inter-light-1463-font-weight relative flex items-center justify-start">
//             A thoughtful newsletter for design nerds &amp; curious people. Plus,
//             you’ll automatically be
//             <br />
//             entered in our vintage clock giveaways.
//           </div>
//         </div>
//       </div>
//     </div>
//     <div className="flex flex-col gap-0 items-start justify-start shrink-0 w-[350px] relative">
//       <div className="rounded-md border-solid border-nanuelectricscom-nero border-2 w-[100%] shrink-0 h-[52.59px] min-w-[350px] max-w-[380px] relative">
//         <div className="flex flex-col gap-0 items-start justify-start absolute right-[51.81px] left-[17px] bottom-[11.59px]">
//           <div className="pt-1 pr-[120.19px] pb-[3px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
//             <div className="text-nanuelectricscom-nero-50 text-left font-nanuelectricscom-inter-semi-bold-1994-upper-font-family text-nanuelectricscom-inter-semi-bold-1994-upper-font-size font-nanuelectricscom-inter-semi-bold-1994-upper-font-weight uppercase relative flex items-center justify-start">
//               Email address
//             </div>
//           </div>
//         </div>
//         <div className="pl-[9px] flex flex-col gap-0 items-start justify-start absolute left-[298.19px] top-[15.78px]">
//           <div className="rounded-md pb-1 flex flex-row gap-0 items-center justify-center shrink-0 relative">
//             <div className="pt-[3px] pl-2 flex flex-row gap-0 items-start justify-start shrink-0 relative">
//               <div className="pt-[2.63px] pl-[2.62px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 w-[17.81px] relative">
//                 <img
//                   className="self-stretch shrink-0 h-[15.19px] relative overflow-visible"
//                   src="frame0.svg"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default NewsLetter

import React from 'react'

function NewsLetter() {
  return (
    <div className="bg-nanuelectricscom-black border-solid border-nanuelectricscom-black border-t-2 pt-12 pb-12 flex flex-col items-start justify-start relative">
      <div className="px-6 md:px-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
        {/* Left Section */}
        <div className="flex flex-col gap-4 md:gap-6 items-start justify-start w-full md:w-1/2">
          {/* Title */}
          <div className="text-nanuelectricscom-nero text-left font-semibold uppercase text-lg md:text-2xl">
            GET THE NEWSLETTER
          </div>

          {/* Description */}
          <div className="text-nanuelectricscom-nero text-left text-sm md:text-base leading-relaxed max-w-full md:max-w-[600px]">
            A thoughtful newsletter for design nerds & curious people. Plus,
            you’ll automatically be entered in our vintage clock giveaways.
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-col items-start justify-start w-full md:w-auto">
          <div className="flex flex-row items-center gap-2 w-full max-w-full md:max-w-[380px]">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-md border-2 border-nanuelectricscom-nero bg-transparent text-nanuelectricscom-nero placeholder-nanuelectricscom-nero-50 px-4 py-2 text-sm md:text-base focus:outline-none"
            />
            {/* Submit Button */}
            <button className="rounded-md bg-white text-black px-4 py-2 font-semibold text-sm md:text-base uppercase hover:bg-[red] hover:text-white">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
