import React from 'react'
import { Link } from 'react-router-dom'

function OrderComponent() {
  return (
    <>
    <h3 className='ml-7 mt-5 font-bold text-[24px]'>My Orders</h3>
    <div className='flex flex-col items-center justify-start mt-6'>
        {/* Order title header */}
        <div className='w-[95%] flex flex-row items-start justify-between border bg-gray-200 pt-4 pb-4 pl-4 pr-4'>
            <div className=''>Order</div>
            <div className=''>Sate</div>
            <div className=''>Status</div>
            <div className=''>Total</div>
            <div className=''>Action</div>
        </div>

        {/* Orders */}
        <div className='w-[95%] flex flex-row items-start justify-between border pt-4 pb-4 pl-4 pr-4'>
            <div className=''>#1</div>
            <div className=''>2021-10-10</div>
            <div className=''>Delivered</div>
            <div className=''>₦100</div>
            <Link to="" className='border pl-4 pr-4 pt-2 pb-2 rounded-[8px]'>View</Link>
        </div>
    </div>
    </>
  )
}

export default OrderComponent