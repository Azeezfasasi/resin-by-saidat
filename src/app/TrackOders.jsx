import React from 'react'
import { Helmet } from 'react-helmet'
import MainHeader from '../assets/components/home-components/MainHeader'
import MyAccountMenu from '../assets/components/account-components/MyAccountMenu'
import AccountHeader from '../assets/components/account-components/AccountHeader'
import MobileFooter from '../assets/components/home-components/MobileFooter'
import WhatsAppChatRibbon from '../assets/components/home-components/WhatsappChatRibbon'

function TrackOders() {
  return (
    <>
    <Helmet>
      <title> Track Order - Resin By Saidat</title>
    </Helmet>
    <div className='w-full flex flex-row justify-start border'>
      {/* Menu section */}
      <div className='w-[0%] md:w-[20%]'>
        <MyAccountMenu />
      </div>

      {/* Main Account Section */}
      <div className='w-full flex flex-col'>
        <AccountHeader />
        <div className='w-[80%] mx-auto my-10 flex flex-col gap-3'>
          <div className='font-semibold text-[20px]'>Track Your Orders</div>
          <div className=''>To track your order please enter your Order ID in the box below and press the "Track" button. This was given to you on your receipt and in the confirmation email you should have received.</div>
          <form>
            <div className='flex flex-col gap-3'>
              <input type='text' placeholder='Order ID' className='border p-2' />
              <button className='bg-black text-white p-2'>Track</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default TrackOders