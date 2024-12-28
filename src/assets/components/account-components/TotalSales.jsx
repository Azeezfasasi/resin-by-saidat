// import React from 'react';
// import exportproduct from '../../images/exportproduct.svg';
// import totalicon from '../../images/totalicon.svg';
// import ordericon from '../../images/ordericon.svg';
// import soldicon from '../../images/soldicon.svg';
// import customericon from '../../images/customericon.svg';

// function TotalSales() {
//   return (
//     <>
//     <div className="w-full relative">
//         <div
//             className="bg-[#ffffff] rounded-[20px] border-solid border-[#f8f9fa] border w-[877px] h-[348px] overflow-hidden flex flex-col md:flex-row"
//             style={{ boxShadow: "0px 4px 20px 0px rgba(238, 238, 238, 0.5)" }}
// >
//             <div className="bg-colors-purple-100 rounded-2xl w-[180px] h-[184px] absolute left-[665px] top-[132px]" />
//             <div className="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-[685px] top-[280px]">
//             0,5% from yesterday
//             </div>
//             <div className="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-[685px] top-[248px]">
//             New Customers
//             </div>
//             <div className="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-[685px] top-52">
//             8
//             </div>
//             <div className="w-10 h-10 static">
//             <div className="bg-[#bf83ff] rounded-[50%] w-10 h-10 absolute left-[685px] top-[152px]" />
//             <div className="w-6 h-6 static">
//                 <div className="w-6 h-6 absolute left-[693px] top-40" />
//                 <img
//                 className="w-5 h-5 absolute left-[695px] top-[162px] overflow-visible"
//                 src={customericon}
//                 />
//             </div>
//             </div>
//             <div className="bg-colors-green-100 rounded-2xl w-[180px] h-[184px] absolute left-[454px] top-[132px]" />
//             <div className="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-[474px] top-[280px]">
//             +1,2% from yesterday
//             </div>
//             <div className="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-[474px] top-[248px]">
//             Product Sold
//             </div>
//             <div className="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-[474px] top-52">
//             5
//             </div>
//             <div className="w-10 h-10 static">
//             <div className="bg-supporting-color-green rounded-[50%] w-10 h-10 absolute left-[474px] top-[152px]" />
//             <div className="w-6 h-6 static">
//                 <div className="w-6 h-6 absolute left-[482px] top-40" />
//                 <img
//                 className="w-5 h-5 absolute left-[484px] top-[162px] overflow-visible"
//                 src={soldicon}
//                 />
//             </div>
//             </div>
//             <div className="bg-[#fff4de] rounded-2xl w-[180px] h-[184px] absolute left-[243px] top-[132px]" />
//             <div className="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-[263px] top-[280px]">
//             +5% from yesterday
//             </div>
//             <div className="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-[263px] top-[248px]">
//             Total Order
//             </div>
//             <div className="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-[263px] top-52">
//             300
//             </div>
//             <div className="w-10 h-10 static">
//             <div className="bg-[#ff947a] rounded-[50%] w-10 h-10 absolute left-[263px] top-[152px]" />
//             <img
//                 className="w-6 h-6 absolute left-[271px] top-40 overflow-visible"
//                 src={ordericon}
//             />
//             </div>
//             <div className="bg-[#ffe2e5] rounded-2xl w-[180px] h-[184px] absolute left-8 top-[132px]" />
//             <div className="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-[52px] top-[280px]">
//             +8% from yesterday
//             </div>
//             <div className="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-[52px] top-[248px]">
//             Total Sales
//             </div>
//             <div className="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-[52px] top-52">
//             $1k
//             </div>
//             <div className="w-10 h-10 static">
//             <div className="bg-[#fa5a7d] rounded-[50%] w-10 h-10 absolute left-[52px] top-[152px]" />
//             <div className="w-6 h-6 static">
//                 <div className="w-6 h-6 absolute left-[60px] top-40" />
//                 <img
//                 className="w-5 h-5 absolute left-[62px] top-[162px] overflow-visible"
//                 src={totalicon}
//                 />
//             </div>
//             </div>
//             <div className="rounded-lg border-solid border-[#c3d3e2] border w-[100px] h-10 absolute left-[745px] top-8" />
//             <div className="w-[68px] h-5 static">
//                 <div className="text-[#0f3659] text-left font-sm-medium-font-family text-sm-medium-font-size leading-sm-medium-line-height font-sm-medium-font-weight absolute left-[785px] top-[42px]">
//                     Export
//                 </div>
//                 <div className="w-4 h-4 static">
//                     <div className="w-4 h-4 absolute left-[761px] top-11" />
//                     <img
//                     className="w-[13.33px] h-[13.33px] absolute left-[762.33px] top-[45.33px] overflow-visible"
//                     src={exportproduct}
//                     />
//                 </div>
//             </div>
//             <div className="text-primary-dark-shade text-left font-xl-semibold-font-family text-xl-semibold-font-size leading-xl-semibold-line-height font-xl-semibold-font-weight absolute left-[31px] top-[23px]">
//             Today’s Sales
//             </div>
//             <div className="text-greys-blue-grey-700 text-left font-base-regular-font-family text-base-regular-font-size leading-base-regular-line-height font-base-regular-font-weight absolute left-[33px] top-[59px]">
//             Sales Summery
//             </div>
//         </div>
//     </div>

//     </>
//   )
// }

// export default TotalSales

import React from 'react';
import exportproduct from '../../images/exportproduct.svg';
import totalicon from '../../images/totalicon.svg';
import ordericon from '../../images/ordericon.svg';
import soldicon from '../../images/soldicon.svg';
import customericon from '../../images/customericon.svg';
import { Link } from 'react-router-dom';

function TotalSales() {
  return (
    <>
    <div className='w-[100%] md:w-[70%] flex flex-col items-center justify-start gap-8 border rounded-[20px] h-fit md:h-[348px] relative bg-[#ffffff] overflow-hidden mt-[20px] p-[20px] md:ml-[10px] '>

      {/* Top section */}
      <div className='flex flex-row items-center justify-between w-full h-[fit-content]'>
        <div className='flex flex-col'>
          <div class="text-primary-dark-shade text-left font-xl-semibold-font-family text-xl-semibold-font-size leading-xl-semibold-line-height font-xl-semibold-font-weight">Today’s Sales</div>
          <div class="text-greys-blue-grey-700 text-left font-base-regular-font-family text-base-regular-font-size leading-base-regular-line-height font-base-regular-font-weight">Sales Summery</div>
        </div>

        <Link to="" className="flex items-center justify-center text-[#0f3659] text-xs sm:text-sm border w-[100px] h-10 rounded-[7px]">
             Export
            <img
              className="w-[13.33px] h-[13.33px] ml-2"
              src={exportproduct}
              alt="Export Icon"
            />
        </Link>
      </div>

      {/* Cards section */}
      <div className='w-full flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-5 overflow-hidden'>
        {/* Card 1 */}
        <div className='bg-[#ffe2e5] rounded-2xl w-[80%] md:w-[25%] h-[184px] relative'>
          <div class="bg-[#fa5a7d] rounded-[50%] w-10 h-10 absolute left-5 top-5 flex flex-row items-center justify-center">
            <img class="w-5 h-5 overflow-visible" src={totalicon} />
          </div>
          <div class="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-5 top-[76px]">$1k</div>
          <div class="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-5 top-[116px]">Total Sales</div>
          <div class="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-5 top-[148px]">+8% from yesterday</div>
        </div>

        {/* Card 2 */}
        <div className='bg-[#fff4de] rounded-2xl w-[80%] md:w-[25%] h-[184px] relative'>
          <div class="bg-[#ff947a] rounded-[50%] w-10 h-10 absolute left-5 top-5 flex flex-row items-center justify-center">
            <img class="w-5 h-5 overflow-visible" src={totalicon} />
          </div>
          <div class="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-5 top-[76px]">200</div>
          <div class="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-5 top-[116px]">Total Order</div>
          <div class="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-5 top-[148px]">+5% from yesterday</div>
        </div>

        {/* Card 3 */}
        <div className='bg-[#dcfce7] rounded-2xl w-[80%] md:w-[25%] h-[184px] relative'>
          <div class="bg-[#3cd856] rounded-[50%] w-10 h-10 absolute left-5 top-5 flex flex-row items-center justify-center">
            <img class="w-5 h-5 overflow-visible" src={totalicon} />
          </div>
          <div class="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-5 top-[76px]">5</div>
          <div class="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-5 top-[116px]">Product Sold</div>
          <div class="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-5 top-[148px]">+1,2% from yesterday</div>
        </div>

        {/* Card 4 */}
        <div className='bg-[#f3e8ff] rounded-2xl w-[80%] md:w-[25%] h-[184px] relative'>
          <div class="bg-[#151d48] rounded-[50%] w-10 h-10 absolute left-5 top-5 flex flex-row items-center justify-center">
            <img class="w-5 h-5 overflow-visible" src={totalicon} />
          </div>
          <div class="text-greys-blue-grey-900 text-left font-2xl-semibold-font-family text-2xl-semibold-font-size leading-2xl-semibold-line-height font-2xl-semibold-font-weight absolute left-5 top-[76px]">8</div>
          <div class="text-[#425166] text-left font-base-medium-font-family text-base-medium-font-size leading-base-medium-line-height font-base-medium-font-weight absolute left-5 top-[116px]">New Customers</div>
          <div class="text-primary-800 text-left font-xs-medium-font-family text-xs-medium-font-size leading-xs-medium-line-height font-xs-medium-font-weight absolute left-5 top-[148px]">0,5% from yesterday</div>
        </div>
      </div>
    </div>
    </>
  );
}

export default TotalSales;
