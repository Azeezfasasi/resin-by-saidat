// import React from 'react'

// function About() {
//   return (
//     <div className="border-solid border-nanuelectricscom-black border-t-2 pt-0.5 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
//   <div className="bg-nanuelectricscom-nero flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//     <div className="flex flex-col gap-0 items-center justify-start self-stretch shrink-0 min-h-[600px] relative">
//       <div className="shrink-0 w-[480px] h-[600px] relative overflow-hidden">
//         <img
//           className="w-[100%] h-[100%] absolute right-[0%] left-[0%] bottom-[0%] top-[0%] overflow-hidden"
//           style={{ objectFit: "cover" }}
//           src="image-text-one-third-about-us-cd-44-e-916-d-5-ae-42-a-0-8-b-55-849760-afa-2-a-3-540-x-jpg0.png"
//         />
//       </div>
//     </div>
//   </div>
//   <div className="bg-nanuelectricscom-nero pt-[159.1px] pr-32 pb-[159.09px] pl-32 flex flex-row gap-0 items-center justify-start self-stretch shrink-0 relative">
//     <div className="flex flex-col items-start justify-start flex-1 relative">
//       <div className="pr-[442px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//         <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-semi-bold-3353-upper-font-family text-nanuelectricscom-inter-semi-bold-3353-upper-font-size leading-nanuelectricscom-inter-semi-bold-3353-upper-line-height font-nanuelectricscom-inter-semi-bold-3353-upper-font-weight uppercase relative max-w-[704px] max-h-[40.7px] flex items-center justify-start">
//           Hi, We’re Nanu
//         </div>
//       </div>
//       <div
//         className="self-stretch shrink-0 h-[241.13px] relative"
//         style={{ margin: "-0.02px 0 0 0" }}
//       >
//         <div className="pr-11 flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[21px]">
//           <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1617-font-family text-nanuelectricscom-inter-light-1617-font-size leading-nanuelectricscom-inter-light-1617-line-height font-nanuelectricscom-inter-light-1617-font-weight relative max-w-[704px] flex items-center justify-start">
//             We create objects that support a healthier relationship with time.
//             Our products are
//             <br />
//             delightfully tactile and offer an alternative to the sea of screens
//             that consume our days.
//           </div>
//         </div>
//         <div className="pr-[15px] pb-[0.17px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[83.78px]">
//           <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1631-font-family text-nanuelectricscom-inter-light-1631-font-size leading-nanuelectricscom-inter-light-1631-line-height font-nanuelectricscom-inter-light-1631-font-weight relative max-w-[704px] flex items-center justify-start">
//             Our goal is to make time tangible, whether we're reflecting on the
//             past, staying present, or
//             <br />
//             planning for the future. To achieve this vision, we build
//             repairable, durable objects that can
//             <br />
//             withstand the test of time.
//           </div>
//         </div>
//         <div className="pr-[54px] pb-[0.17px] flex flex-col gap-0 items-start justify-start absolute right-0 left-0 top-[169.96px]">
//           <div className="text-nanuelectricscom-black text-left font-nanuelectricscom-inter-light-1645-font-family text-nanuelectricscom-inter-light-1645-font-size leading-nanuelectricscom-inter-light-1645-line-height font-nanuelectricscom-inter-light-1645-font-weight relative max-w-[704px] flex items-center justify-start">
//             Maybe you found us from Nudge, our counter that makes tracking
//             habits a satisfying
//             <br />
//             experience. Or perhaps you found us on Tik Tok restoring and
//             learning from timeless
//             <br />
//             vintage pieces. Whatever the reason, we’re excited you’re here!
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </div>

//   )
// }

// export default About

import React from 'react'

function About() {
  return (
    <div className="border-solid border-nanuelectricscom-black border-t-2 pt-0.5 flex flex-col md:flex-row gap-0 items-start justify-start relative overflow-hidden">
      {/* Left Section */}
      <div className="bg-nanuelectricscom-nero flex flex-col items-center justify-start w-full md:w-1/2">
        <div className="min-h-[300px] md:min-h-[600px] w-full relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="image-text-one-third-about-us-cd-44-e-916-d-5-ae-42-a-0-8-b-55-849760-afa-2-a-3-540-x-jpg0.png"
            alt="About Us"
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="bg-nanuelectricscom-nero px-6 py-8 md:px-32 md:py-[159.09px] flex flex-col items-center justify-start w-full md:w-1/2">
        <div className="flex flex-col items-start justify-start w-full">
          {/* Title */}
          <div className="text-nanuelectricscom-black text-center md:text-left font-bold text-xl md:text-3xl uppercase mb-6">
            Hi, We’re Nanu
          </div>

          {/* Description */}
          <div className="text-nanuelectricscom-black text-center md:text-left text-sm md:text-base leading-relaxed space-y-4">
            <p>
              We create objects that support a healthier relationship with time. Our products are delightfully tactile and offer an alternative to the sea of screens that consume our days.
            </p>
            <p>
              Our goal is to make time tangible, whether we're reflecting on the past, staying present, or planning for the future. To achieve this vision, we build repairable, durable objects that can withstand the test of time.
            </p>
            <p>
              Maybe you found us from Nudge, our counter that makes tracking habits a satisfying experience. Or perhaps you found us on Tik Tok restoring and learning from timeless vintage pieces. Whatever the reason, we’re excited you’re here!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
