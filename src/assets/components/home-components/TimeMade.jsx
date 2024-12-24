// import React from 'react'

// function TimeMade() {
//   return (
//     <div className="w-full bg-nanuelectricscom-verdun-green border-solid border-nanuelectricscom-black border-t-2 pt-[50px] pr-12 pb-12 pl-12 flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
//         <div className="flex flex-row gap-0 items-start justify-start self-stretch shrink-0 relative">
//             <div className="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative">
//             <div className="pr-[600px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
//                 <div className="text-nanuelectricscom-nero text-left font-['Inter-Bold',_sans-serif] text-[68.28125px] leading-[76px] font-bold uppercase relative max-w-[1344px] flex items-center justify-start">
//                 TIME MADE TANGIBLE
//                 </div>
//             </div>
//             </div>
//         </div>
//     </div>

//   )
// }

// export default TimeMade

import React from 'react'

function TimeMade() {
  return (
    <div className="w-full bg-nanuelectricscom-verdun-green border-solid border-nanuelectricscom-black border-t-2 pt-12 px-4 pb-12 flex flex-col items-start justify-start relative overflow-hidden md:flex-row md:px-12">
      <div className="flex flex-col items-start justify-start w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="text-nanuelectricscom-nero text-left font-['Inter-Bold',_sans-serif] text-3xl leading-tight font-bold uppercase md:text-[68.28125px] md:leading-[76px] md:max-w-[1344px]">
            TIME MADE TANGIBLE
          </div>
        </div>
      </div>
    </div>
  )
}

export default TimeMade